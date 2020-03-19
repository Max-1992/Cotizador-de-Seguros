import React, { useState } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Style Components
import styled from '@emotion/styled';

// Helpers
import { diffYear, subtractPriceYear, addPriceType, calcPricePlan } from '../../utils/Helpers';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    outline: none;
    transition: backgrond-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;

    }

`;

const Error = styled.div`
    background-color: red;
    color: #fff;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
`;


const Form = ({ setstateSummary, setstateLoading }) => {

    // Create State Data
    const initialStateData = {
        marca: '',
        year: '',
        plan: '',
    }
    const [stateData, setstateData] = useState(initialStateData);

    // Extraer los valores del State
    const { marca, year, plan } = stateData;

    // Crear State Error
    const initialStateError = {
        err: false,
        message: ''
    };
    const [stateError, setstateError] = useState(initialStateError);

    // Leer los datos
    const handleChange = event => {
        setstateData({
            ...stateData,
            [event.target.name]: event.target.value
        })
    };

    // Enviar Formulario
    const handleSubmite = event => {
        event.preventDefault();

        if( marca.trim() === '', year.trim() === '' || plan.trim() === '' ) {
            setstateError({
                err: true,
                message: 'El formulario no esta completo.'
            })
            return;
        };

        // Remover el Error
        setstateError({
            err: false,
            message: ''
        })

        // Base de precio
        let priceBase = 2000;

        // obterner la diferencia de años
        const difference = diffYear(year);

        // Por cada año restar el 3%
        priceBase = subtractPriceYear(priceBase, difference, 3);
        
        // Añadir valor por marca
        priceBase = addPriceType(marca, priceBase);

        // Calcular Plan
        priceBase = calcPricePlan(priceBase, plan);

        // Total
        const precioTotal = parseFloat(priceBase).toFixed(2);

        // Comenazar a cargar.
        setstateLoading({ 
            isLoading: true
        });

        setTimeout(() => {
           
            setstateLoading({ 
                isLoading: false
            });

            // Almacenar en el State Symmary el resumen de cotizacion.
            setstateSummary({
                cotizacion: Number(precioTotal),
                datos: stateData
            }, 3000);

        }, 3000)

    }

    return ( 
        <form onSubmit={handleSubmite}>
            <Field>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="Americano">Americano</option>
                    <option value="Europeo">Europeo</option>
                    <option value="Asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="basico"
                    checked={plan === "basico"}
                    onChange={handleChange}
                /> Básico
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="completo"
                    checked={plan === "completo"}
                    onChange={handleChange}
                /> Completo
            </Field>
            { stateError.err ? <Error>{ stateError.message }</Error> : null }
            <Button type="submit"> Cotizar </Button>
        </form>
     );
}

Form.propTypes = {
    setstateSummary: PropTypes.func.isRequired,
    setstateLoading: PropTypes.func.isRequired
}
 
export default Form;