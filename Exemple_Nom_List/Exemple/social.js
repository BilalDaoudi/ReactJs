import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super();
    this.nom = props.nom;
  }
  render() {
    return (
      <>
        <li>{this.nom}</li>
      </>
    );
  }
}

export default Social;
