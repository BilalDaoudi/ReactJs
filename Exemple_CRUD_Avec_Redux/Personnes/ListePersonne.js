import { useSelector, useDispatch } from "react-redux";
import { Supprimer } from "./actions";
import { Link } from "react-router-dom";

const ListePersonne = () => {
  const Personnes = useSelector((state) => state.Personnes);
//   console.log(Personnes);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/Ajouter`}><button>Nouvelle Personne</button></Link>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Personnes.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.nom} </td>
              <td>{person.prenom}</td>
              <td>{person.age}</td>

              <td>
                <button onClick={() => dispatch(Supprimer(person.id))}>
                  Supprimer
                </button>
                <Link to={`/Modifier/${person.id}`}>
                  <button>Modifier</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListePersonne;
