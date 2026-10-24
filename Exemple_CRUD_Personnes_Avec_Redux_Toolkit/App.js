import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ajouterPersonne, modifierPersonne, supprimerPersonne } from './personnesSlice';

const PersonnesListe = () => {
  const personnes = useSelector((state) => state.personnes);
  const dispatch = useDispatch();

  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [sexe, setSexe] = useState('');

  const ajouterNouvellePersonne = () => {
    const nouvellePersonne = {
      id: Date.now(),
      nom: nom,
      age: age,
      sexe: sexe,
    };
    dispatch(ajouterPersonne(nouvellePersonne));
    setNom('');
    setAge('');
    setSexe('');
  };

  const modifierPersonneExistante = (id) => {
    const personneModifiee = {
      id: id,
      nom: nom,
      age: age,
      sexe: sexe,
    };
    dispatch(modifierPersonne(personneModifiee));
    setNom('');
    setAge('');
    setSexe('');
  };

  const supprimerPersonneExistante = (id) => {
    dispatch(supprimerPersonne(id));
  };

  return (
    <div>
      <h2>Liste des personnes</h2>
      <ul>
        {personnes.map((personne) => (
          <li key={personne.id}>
            <div>Nom: {personne.nom}</div>
            <div>Âge: {personne.age}</div>
            <div>Sexe: {personne.sexe}</div>
            <button onClick={() => modifierPersonneExistante(personne.id)}>Modifier</button>
            <button onClick={() => supprimerPersonneExistante(personne.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h2>Ajouter une personne</h2>
      <div>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div>
        <label>Âge :</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Sexe :</label>
        <input type="text" value={sexe} onChange={(e) => setSexe(e.target.value)} />
      </div>
      <button onClick={ajouterNouvellePersonne}>Ajouter</button>
    </div>
  );
};

export default PersonnesListe;