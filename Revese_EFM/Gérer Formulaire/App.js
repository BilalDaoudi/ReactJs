import React, { useState } from "react";
import Table from './Table';
import Formulaire from "./Formulaire";
export default function App() {
  const [personnes, setPersonnes] = useState([
    {
      id: 1,
      Nom: "Bilal",
      DateNaissance: "2002-12-09",
      Genre: "Homme",
      Loisir: ["football","lecture"],
      Nationalite: 'Maroc',
      Observation : "Developpeur ful stack"
    },
    {
      id: 2,
      Nom: "Bilal",
      DateNaissance: "2002-12-09",
      Genre: "Homme",
      Loisir: ["football","lecture"],
      Nationalite: 'Maroc',
      Observation : "Developpeur ful stack"
    },
  ]);

  


  function Ajouter(per){
    setPersonnes([...personnes,per]);
  }

  function Supprimer(id){
    setPersonnes(personnes.filter(p => p.id !== id));
  }

 

  return (
    <div>
        <Table table={personnes} supprimer={Supprimer}  />
        <Formulaire Ajouter={Ajouter} table={personnes}/>
    </div>
  );
}
