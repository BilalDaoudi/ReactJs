
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Ajouter } from './actions';
import { Link } from 'react-router-dom';    


const AjouterPersonne = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');


  const Personnes = useSelector((state) => state.Personnes);
  const newid = Personnes.length === 0 ? 1 : Personnes[Personnes.length-1].id + 1;
  const dispatch = useDispatch();
  const AjouterPer = () => {
    const person = {id: newid, nom,prenom,age};
    dispatch(Ajouter(person));
    setNom('');
    setPrenom('');
    setAge('');
  };

  return (
    <div>
      <input type="text" placeholder="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <Link onClick={AjouterPer} to="/"><button >Add Person</button></Link>
    </div>
  );
};

export default AjouterPersonne;



