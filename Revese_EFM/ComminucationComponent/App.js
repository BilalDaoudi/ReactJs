import React, { useState } from 'react';
import Table from './Table';
import Ajouter from './AjouterJoueur';
export default function App(){
    const [joueurs,setJoueurs] = useState([
        {"id" : 1 , "Nom" : "Bilal" ,"Equipe" : "FCB" , "Num" : 10},
        {"id" : 2 , "Nom" : "Amine" ,"Equipe" : "FCB" , "Num" : 2},
        {"id" : 3 , "Nom" : "Nouzha" ,"Equipe" : "FCB" , "Num" : 5},
    ]);

    function AjouterJou(J){
        setJoueurs([...joueurs,J]);
    }

    function Supprimer(id){
        setJoueurs(joueurs.filter(j => j.id !== id));
    }


    return(
        <div>
            <Table table={joueurs} supprimer={Supprimer} />
            <Ajouter Ajouter={AjouterJou} id={joueurs.length === 0 ? 0 : joueurs[joueurs.length - 1].id}/>
        </div>
    )


}