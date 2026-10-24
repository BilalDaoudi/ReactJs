import React from "react";

export default class IncDec extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 0 };
  }

  incrementer() {
    let valeur = this.state.nombre + 1;
    this.setState({ nombre: valeur });
  }

  decrementer() {
    let valeur = this.state.nombre - 1;
    this.setState({ nombre: valeur });
  }

  render(){
    return (
        <div>
            <h1>{this.state.nombre}</h1>
            <button onClick={() => this.incrementer()}>Incrémenter</button>
            <button onClick={() => this.decrementer()}>Décrémenter</button>
        </div>
    )
  }
}
