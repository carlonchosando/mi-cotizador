import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';


function App() {
  return (
    <div className="Contenedor">
      <Header
        titulo = 'Cotizador de Seguros'
      />

      <div className='contenedor-formulario'>
        <Formulario/>

      </div>


    </div>
  );
}

export default App;
