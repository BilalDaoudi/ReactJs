import React from "react";
import Afficher from "./Component";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      affiche: props.affiche,
      message: props.header,
      btn: props.btn,
    };
  }

  Affiche() {
    this.state.affiche
      ? this.setState({ affiche: false })
      : this.setState({ affiche: true });
  }

  render() {
    return (
      <div>
        <button onClick={() =>this.Affiche()}>Affiche</button>
        {this.state.affiche ? (
        <Afficher header={this.state.message} btn={this.state.btn} />) : null}
      </div>
    );
  }
}
