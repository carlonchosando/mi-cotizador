import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Resultado extends Component {
  render() {

    const resultado = this.props.resultado;
    const mensaje = (!resultado)?"Elije Marca, Año y tipo de seguro (Básico o Completo)":"El total es de: $";

    return (
      
        <div className="gran-total">

          {mensaje}

          <TransitionGroup component="span" className="resultado">
            <CSSTransition
              classNames="resultado"
              key={resultado}
              timeout={{ enter: 500, exit: 500 }}>
              <span>{Resultado}</span>
            </CSSTransition>
          </TransitionGroup>
        </div>
      
    );
    
  }
}

export default Resultado;
