import React, { useState } from "react";

export default function Formulaire(props) {
  console.table(props.table.length);
  const [newp, setNewp] = useState({
    id: props.table.length === 0 ? 1 : props.table[props.table.length-1].id +1,
    Nom: "",
    DateNaissance: "",
    Genre: "",
    Loisir: [],
    Nationalite: "maroc",
    Observation: "",
  });

  function AjouterLoisir(e) {
    const val = e.target.value;
    if (newp.Loisir.includes(val))
      setNewp({ ...newp, Loisir: newp.Loisir.filter((l) => l !== val) });
    else setNewp({ ...newp, Loisir: [...newp.Loisir, val] });
  }

  function Ajouter(e){
    e.preventDefault(e)
    props.Ajouter(newp);
    setNewp({...newp,id:newp.id+1})
  }
  return (
    <div>
      <form onSubmit={(e) => Ajouter(e)}>
      <div>
          <lable>id : </lable>
          <input
            type="text"
            value={props.table.length === 0 ? 1 : props.table[props.table.length-1].id +1}
            readOnly
          />
        </div>
        <div>
          <lable>Nom : </lable>
          <input
            type="text"
            onChange={(e) => setNewp({ ...newp, Nom: e.target.value })}
            value={newp.Nom}
          />
        </div>
        <div>
          <lable>Date de naissance : </lable>
          <input
            type="date"
            onChange={(e) =>
              setNewp({ ...newp, DateNaissance: e.target.value })
            }
            value={newp.DateNaissance}
          />
        </div>
        <div>
          <lable>genre : </lable>
          <input
            type="radio"
            name="genre"
            value="Homme"
            onChange={(e) => setNewp({ ...newp, Genre: e.target.value })}
            checked={newp.Genre === "Homme" ? true : false}
          />
          Homme
          <input
            type="radio"
            name="genre"
            value="Femme"
            onChange={(e) => setNewp({ ...newp, Genre: e.target.value })}
            checked={newp.Genre === "Femme" ? true : false}
          />
          Femme
        </div>
        <div>
          <lable>loisir : </lable>
          <input
            type="checkbox"
            value="football"
            onChange={(e) => AjouterLoisir(e)}
            checked={newp.Loisir.includes("football") ? true : false}
          />
          football
          <input
            type="checkbox"
            value="lecture"
            onChange={(e) => AjouterLoisir(e)}
            checked={newp.Loisir.includes("lecture") ? true : false}
          />
          lecture
          <input
            type="checkbox"
            value="programmation"
            onChange={(e) => AjouterLoisir(e)}
            checked={newp.Loisir.includes("programmation") ? true : false}
          />
          programmation
        </div>
        <div>
          <lable>Nationalite : </lable>
          <select
            onChange={(e) => setNewp({ ...newp, Nationalite: e.target.value })}
          >
            <option
              value="maroc"
              selected={newp.Nationalite === "maroc" ? true : false}
            >
              maroc
            </option>
            <option
              value="france"
              selected={newp.Nationalite === "france" ? true : false}
            >
              france
            </option>
            <option
              value="germany"
              selected={newp.Nationalite === "germany" ? true : false}
            >
              germany
            </option>
            <option
              value="italy"
              selected={newp.Nationalite === "italy" ? true : false}
            >
              italy
            </option>
          </select>
        </div>
        <div>
          <lable>Observation : </lable>
          <textarea
            rows="3"
            cols="30"
            onChange={(e) => setNewp({ ...newp, Observation: e.target.value })}
            value={newp.Observation}
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
}
