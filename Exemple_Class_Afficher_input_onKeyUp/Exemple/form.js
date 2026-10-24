import React from "react";



export default class Form extends React.Component
{
    constructor(){
        super();
        this.state = {nom : "",prenom : "",info : ""}
    }
    setNom(val){
        this.state.nom = val;
    }
    setPrenom(val){
        this.state.prenom = val;
    }

    afficher(){
        this.setState({info :  "Nom : " + this.state.nom + "    Prénom : " + this.state.prenom}) 
    }

    
    render(){
        return (
            <>
                <input type="text" onChange={(e) =>this.setNom(e.target.value)} placeholder="Nom" /><br/><br/>
                <input type="text" onChange={(e) =>this.setPrenom(e.target.value)} placeholder="Prenom"/><br/><br/>

                <button onClick={()=>this.afficher()}>Afficher</button>

                {this.state.info != "" ? <p>{this.state.info}</p> : ""}
            </>
        )
    }
}