import React from "react";
import { useState } from "react";
import Afficher from "./Component";

export default function App(props) {
  const [affiche,setAffiche] = useState(false)

  function Affiche(){
    affiche ? setAffiche(false) : setAffiche(true)
  }

  return (
    <div>
      <button onClick={Affiche}>Affiche</button>
      
      {affiche ? (
        <Afficher header={props.header} btn={props.btn} />
      ) : null}
    </div>
  );
}
