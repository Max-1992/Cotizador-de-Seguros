import React, { useState } from 'react';

// Style Components
import styled from '@emotion/styled';

// Components
import Header from './components/Header/Header';
import Form from './components/Formulario/Formulario';
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';
import Spinner from './components/Spinner/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerFrom = styled.div`
  background-color: #fff;
  padding: 3rem;
  position: relative;
`;


function App() {

  // Crear State Summary
  const initialStateSummary = {
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  };
  const [stateSummary, setstateSummary] = useState(initialStateSummary)

  // Extraer datos de State
  const { cotizacion, datos } = stateSummary;

  // Create State Loading
  const initialStateLoading = {
    isLoading: false
  };
  const [stateLoading, setstateLoading] = useState(initialStateLoading);


  return (
    <Container>
        <Header 
          title={'Cotizador de Seguros'}
        />

        <ContainerFrom>
          <Form
            setstateSummary={setstateSummary}
            setstateLoading={setstateLoading}
          />

          { stateLoading.isLoading ?  <Spinner /> : null }

          {
            !stateLoading.isLoading ?
              <Resumen 
                summary={datos}
              />
            :
              null
          }
          

          {
            !stateLoading.isLoading ?
              <Resultado 
                cotizacion={cotizacion}
              />
            :
              null
          }
         

        </ContainerFrom>
    </Container>
  );
}

export default App;
