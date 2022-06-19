import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio} from '../helper';


class App extends Component {

  cotizarSeguro = (datos) => {  
     const { marca, year, plan } = datos;

    let resultado = 2000;

    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    
  

    //por cada añ restar el 3% al valor del seguro


    //Americano 15% si es basico 20% si es completo




  }

render() {
  return (
    <div className="Contenedor">
      <Header titulo="Cotizador de Seguros" />

      <div className="contenedor-formulario">
        <Formulario cotizarSeguro={this.cotizarSeguro} />
      </div>
    </div>
  );
  }
}
export default App;
