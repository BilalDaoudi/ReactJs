import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { AjouterUser } from "../config/actions";

export default function Ajouter() {
    const users = useSelector(data => data)
    const dispatch = useDispatch();
    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");

    function NewUser(e){
        e.preventDefault();
        const newuser = {
            id : users.length === 0 ? 1 : users[users.length-1].id +1,
            username : username,
            password :password
        }
        dispatch(AjouterUser(newuser));

    }

  return (
    <div>
      <p>Ajouter User</p>
      <form onSubmit={(e) => NewUser(e)}>
        Identifient :
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <br />
        password :
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
}
