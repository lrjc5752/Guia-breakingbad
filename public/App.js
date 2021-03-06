import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
`;
function App() {

      const consultarApi = async() =>{
         const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
         const frase = await api.json();
         console.log(frase);
      };
        // const consultarApi = () =>{
        //  const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        //  const frase = api.then(respuesta => respuesta.json());
        //  frase.then(resultado => console.log(resultado));
        //   };


  return (
     <Contenedor>
       <Boton
      //  onClick = {consultarApi} de  esta forma espera el evento 
      //  onClick = {() => consultarApi()} de  esta forma tambien espera el evento 
      //  onClick = {consultarApi()} de esta forma no espera el evento,se ejecuta como una llamada a la funcion 
          onClick = {consultarApi}
       >
          Obtener Frase
     </Boton>
     </Contenedor>
  );
}

export default App;
