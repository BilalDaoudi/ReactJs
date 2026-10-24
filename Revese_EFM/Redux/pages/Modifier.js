import Menu from "../Component/Menu";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ModifierPersonne } from "../config/actions";
import {useNavigate} from 'react-router-dom';

export default function Modifier() {
  const { id } = useParams();
  // console.log(id);
  const personne = useSelector((data) =>
    data.find((p) => p.id === parseInt(id))
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updatePer, setUpdatePes] = useState({
    id: personne.id,
    Nom: personne.Nom,
    DateNaissance: personne.DateNaissance,
    Genre: personne.Genre,
  });

  function UpdatePersonne(e){
    e.preventDefault();
    dispatch(ModifierPersonne(updatePer));
    navigate("/Personnes");
  }


  return (
    <div>
      <Menu />
      <div className="text-center text-warning">
        
        <b>Modifier Personne {id} : </b>
      </div>
      <div>
        <form onSubmit={(e) => UpdatePersonne(e)}>
          <div className="form-group m-3">
            <label className="form-label">Nom :</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setUpdatePes({ ...updatePer, Nom: e.target.value })
              }
              value={updatePer.Nom}
            />
          </div>
          <div className="form-group m-3">
            <label className="form-label">Date de Naissance :</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) =>
                setUpdatePes({
                  ...updatePer,
                  DateNaissance: e.target.value,
                })
              }
              value={updatePer.DateNaissance}
            />
          </div>
          <div className="form-group m-3">
            <label className="form-label">Genre :</label> &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              value="Homme"
              onChange={(e) =>
                setUpdatePes({ ...updatePer, Genre: e.target.value })
              }
              
              checked={updatePer.Genre === 'Homme' ? true : false}
            />
            Homme&nbsp;&nbsp;
            <input
              type="radio"
              value="Femme"
              onChange={(e) =>
                setUpdatePes({ ...updatePer, Genre: e.target.value })
              }
              checked={updatePer.Genre === 'Femme' ? true : false}
            />
            Femme
          </div>

          <div className="form-group m-3">
            <input type="submit" className="btn btn-primary" value="Modifier" />
          </div>
        </form>
      </div>
    </div>
  );
}
