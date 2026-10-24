import React,{useState} from 'react';
export default function Ajouter(props) {

    const [nom , setNom] = useState("");
    const [equipe , setEquipe] = useState("");
    const [num , setNum] = useState(0);
    function submitAjouter(e){
        e.preventDefault();
        const newJ = {
            'id' : props.id + 1,
            'Nom' : nom,
            'Equipe' : equipe,
            'Num' : num
        }

        props.Ajouter(newJ);
    }
  return (
    <div>
      <form onSubmit={(e) => submitAjouter(e)}>
        <div>
          <label>Nom : </label>
          <input type="text" onChange={(e) => setNom(e.target.value)} />
        </div>
        <div>
          <label>Equipe : </label>
          <input type="text"  onChange={(e) => setEquipe(e.target.value)} />
        </div>
        <div>
          <label>Numéro : </label>
          <input type="number" onChange={(e) => setNum(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
}
