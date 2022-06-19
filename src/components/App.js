import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from '../helper';


class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }


  cotizarSeguro = (datos) => {  
     const { marca, year, plan } = datos;

    let resultado = 2000;

    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    
     

    //por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    

    //Americano 15% si es basico 20% si es completo
    resultado= calcularMarca(marca)*resultado;

    // el plan del auto en basico incrementa  en 20% cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);
    
    //dependiendo del plan incrementar el valor del seguro

    resultado = parseFloat(resultado * incrementoPlan).toFixed(2);
    
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    this.setState({
      resultado: resultado,
      datos: datosAuto
    });

  }

render() {
  return (
    <>
      <div className="Contenedor">
        <Header titulo="Cotizador de Seguros" />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen 
          datos={this.state.datos}
          resultado={this.state.resultado}
           />
        </div>
      </div>
    </>
  );
  }
}
export default App;
