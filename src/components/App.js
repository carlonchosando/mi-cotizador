import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import { calcularMarca, obtenerDiferenciaAnio, obtenerPlan } from "../helper";
import Resultado from "./Resultado";

class App extends Component {
  state = {
    resultado: " ",
    datos: {},
  };

  cotizarSeguro = (datos) => {
    const { marca, year, plan } = datos;

    let resultado = 2000;

    const diferencia = obtenerDiferenciaAnio(year);

    resultado -= (diferencia * 3 * resultado) / 100;

    resultado = calcularMarca(marca) * resultado;

    let incrementoPlan = obtenerPlan(plan);

    resultado = parseFloat(resultado * incrementoPlan).toFixed(2);

    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan,
    };

    this.setState({
      resultado: resultado,
      datos: datosAuto,
    });
  };

  render() {
    return (
      <>
        <div className="Contenedor">
          <Header titulo="Cotizador de Seguros" />

          <div className="contenedor-formulario">
            <Formulario cotizarSeguro={this.cotizarSeguro} />
            <Resumen datos={this.state.datos} />
            <Resultado resultado={this.state.resultado} />
          </div>
        </div>
      </>
    );
  }
}
export default App;
