import React from 'react';

// Prop Types
import PropTypes from 'prop-types';

import { capitalize } from '../../utils/Helpers';

// Style Components
import styled from '@emotion/styled';

const ContainerResumen = styled.div`
    background-color: #00838f;
    padding: 1rem;
    color: #fff;
    margin-top: 1rem;
    text-align: center;
`;

const ContentList = styled.ul`
    padding: 0;
`;


const Resumen = ({ summary }) => {

    // Extraer datos
    const { marca, year, plan } = summary;

    if(marca === '' || year === '' || plan === '') {
        return null;
    }

    return (  
       <ContainerResumen>
            <h2>Resumen de Cotización</h2>
            <ContentList>
                <li>Marca: {capitalize(marca)} </li>
                <li>Plan: {capitalize(plan)} </li>
                <li>Año del vehiculo: {capitalize(year)} </li>
            </ContentList>
       </ContainerResumen>
    );

  
}

Resumen.propTypes = {
    summary: PropTypes.object.isRequired
}
 
export default Resumen;