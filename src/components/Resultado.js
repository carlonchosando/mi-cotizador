import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Resultado extends Component {
  render() {
        return (
             <p>$ {this.props.Resultado}</p>  
            );
    
  }
}

export default Resultado;
