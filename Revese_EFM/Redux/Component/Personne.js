import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { SupprimerPersonne } from '../config/actions';
export default function Personne(props) {
    const Dispatch = useDispatch();
  return (
    <div className="col-3 card">
      <p>
        <b>Personne : {props.personne.id}</b>
      </p>
      <p>Nom :{props.personne.Nom}</p>
      <p>Né le :{props.personne.DateNaissance}</p>
      <p>Genre :{props.personne.Genre}</p>
      <p>
        <Link to={`/Modifier/${props.personne.id}`}><button className="btn btn-primary">Editer</button></Link>
        <button className="btn btn-danger" onClick={() => Dispatch(SupprimerPersonne(props.personne.id))}>Supprimer</button>
      </p>
    </div>
  );
}
