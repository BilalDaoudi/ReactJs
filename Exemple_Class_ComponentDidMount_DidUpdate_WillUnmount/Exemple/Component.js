import React from "react";

export default class Afficher extends React.Component{
  constructor(props) {
    super()
    this.state = {
      message: props.header,
      btn: props.btn
    };
  }

  componentDidMount(){
    alert("Render")
  }

  componentDidUpdate(){
    alert("Updated Component")
  }

  componentWillUnmount(){
    alert("Deleted Component")
  }


  Change() {
    if (this.state.btn == "Nouzha") {
       
        this.setState({message:"Nouzha Bouabid né le 22/02/2004",btn:"Bilal"})

    } else {
        this.setState({message:"Bilal Daoudi né le 09/12/2002",btn:"Nouzha"})
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() =>this.Change()}> {this.state.btn}</button>
      </div>
    );
  }
}
