import React, { useState } from "react";
import Rechercher from "./Rechercher";
import Resultat from "./Resultat";

const list = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" },
];

export default function App() {
  const [val, setVal] = useState("");
  const [resultat, setResultat] = useState([]);

  function RechVal(v){
    setVal(v);
    setResultat(list.filter(item => item.type.toUpperCase() === v))
  }

  return (
    <div className="App">
      <div>
        <h1>Composant App</h1>
      </div>
      <Rechercher rechsubmit={RechVal}/>
      <p>le type : <b>{val}</b></p>
      {/* {console.log(resultat)} */}
      <Resultat obj={resultat}/>
      
    </div>
  );
}
