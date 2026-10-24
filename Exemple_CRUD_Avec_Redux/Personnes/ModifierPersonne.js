import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Modifier } from "./actions";
import { Link } from "react-router-dom";

const ModifierPersonne = () => {
  const { id } = useParams();
  const person = useSelector((state) =>
    state.Personnes.find((person) => person.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const [nom, setNom] = useState(person.nom);
  const [prenom, setPrenom] = useState(person.prenom);
  const [age, setAge] = useState(person.age);
  const ModifierPersonne = () => {
    const modifierPresonne = { ...person, nom,prenom, age };
    dispatch(Modifier(modifierPresonne));
  };

  return (
    <div>
      <h1>Modifier Personne ID : {id}</h1>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <Link onClick={ModifierPersonne} to="/">
        <button>Modifier</button>
      </Link>
    </div>
  );
};

export default ModifierPersonne;
