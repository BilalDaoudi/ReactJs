import React from "react";
export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: "", compteur: 0, fin: false ,imgface:""};
  }

  rejouer() {
    this.setState({
      face: "",
      compteur: 0,
      fin: false,
      imgface : ""
    });
  }

  jouer() {
    if (this.state.fin == false) {
      const valeur = Math.floor(Math.random() * 6) + 1;
      if (this.props.cache == valeur) {
        this.state.fin = true;
      }
      this.state.imgface = "./images/face" + valeur + ".png"; 
      this.state.compteur++;
      this.setState({ face: valeur });
    }
  }

  render() {
    return (
      
      <div>
        <img src="./images/init.png" />

        <h1>Jeu de Dé...</h1>

        <p>face : {this.state.face}</p>

        {this.state.imgface == "" ? "" : <img src={this.state.imgface} />}

        <p>Nombre d'essais : {this.state.compteur}</p>

      

        {this.state.fin ? <p>Bravo</p> : ""}


        {this.state.fin ? <button onClick={() => this.rejouer()}>rejouer</button> : <button onClick={() => this.jouer()}>jouer</button> }
        

        
      </div>
    );
  }
}
