import React, { Component } from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";


class Resultado extends Component {
  render() {

    const resultado = this.props.resultado;

    const mensaje = (!resultado) ? "ingresa tu selección" : "El total es $";

        return (
          <div className="gran-total">
            {mensaje}
            <TransitionGroup component="span" className="resultado">
              <CSSTransition
                classNames="resultado"
                key={resultado}
                timeout={{ enter: 900, exit: 800 }}>
                <span>{resultado}</span>
              </CSSTransition>
            </TransitionGroup>
          </div>
        );    
  }
}
export default Resultado;
