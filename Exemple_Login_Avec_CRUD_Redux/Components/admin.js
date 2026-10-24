import { useSelector,useDispatch } from "react-redux";
import { SupprimerUser } from "../config/actions";
import Ajouter from "./AjouterUser";
import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  const Users = useSelector((data) => data.filter((d) => d.id !== props.user.id));
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
      <p>
        <b>Bienvenue : {props.user.username} <button onClick={() => navigate("/")}>Deconnexion</button></b>
      </p>
      <div>
        <table width="100%">
          <thead>
            <tr>
              <th>Id</th>
              <th>userName</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((t, i) => (
              <tr key={i}>
                <td>{t.id}</td>
                <td>{t.username}</td>
                <td>{t.password}</td>
                <td>
                    <button onClick={() => dispatch(SupprimerUser(t.id))}>Supprimer</button>
                    {/* <button>Modifier</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Ajouter />

                
    </div>
  );
}
