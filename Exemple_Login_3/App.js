import React from "react";
import Connexion from "./Connexion";


export default function App(){
    const Users = [
        {"UserName" : "Admin" , "Password" : "Admin"},
        {"UserName" : "User1" , "Password" : "User1"},
        {"UserName" : "User2" , "Password" : "User2"},
    ]
    
    return(
            
            <Connexion users = {Users}/>
    )
}