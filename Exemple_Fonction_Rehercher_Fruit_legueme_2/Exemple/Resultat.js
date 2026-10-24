import React from "react";

export default function Resultat(props) {
  return (
    <div>
      <h1>composant ResultatList</h1>
      {props.obj.length == 0 ? (
        <p>pas de resultats</p>
      ) : (
        <div className="list">
          <ul>
            {props.obj.map((item) => {
              return <li key={item.nom}>{item.nom}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
