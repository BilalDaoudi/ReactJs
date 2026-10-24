import React from "react";



export default class Password extends React.Component
{
    constructor(){
        super();
        this.state = {pass : ""}
    }
    setpass(val){
        this.setState({pass : val})
    }
    


    
    render(){
        return (
            <>
                <input type="password" onKeyUp={(e) =>this.setpass(e.target.value)} placeholder="password ...." />          
                {this.state.pass.length < 4 ? <p>password doit avoir au mois 4 caractére</p> : ""}
            </>
        )
    }
}