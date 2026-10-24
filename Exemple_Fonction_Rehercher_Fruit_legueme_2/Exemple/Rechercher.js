import React, { useState } from "react";

export default function Rechercher(props) {
  const [term, setTerm] = useState("");
  function rechsubmitBar(e){
    e.preventDefault()
    props.rechsubmit(term)
  }

  return (
    <div>
      <h1>composant ChercheBar</h1>

      <form onSubmit={rechsubmitBar}>
        <label>Entrer le mot clé de recherche</label>
        <br />
        <input type="text" value={term} onChange={(e)=>setTerm(e.target.value.toUpperCase())} />
        <br />
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
}
