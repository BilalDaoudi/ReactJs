import { useState } from "react";
import { useSelector } from "react-redux";

export default function Login(props) {
  const Users = useSelector((data) => data);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ErreurUsername, setErreurUsername] = useState("");
  const [ErreurPassword, setErreurPassword] = useState("");

  function SeConnecter(e) {
    e.preventDefault();
    const user = Users.find((u) => u.username === username);
    if (user !== undefined) {
      if (user.password === password) {
        props.loginuser(true, user, "");
      } else {
        setErreurPassword("Password est Incorrect");
        setErreurUsername("");
      }
    } else {
        setErreurPassword("");
      setErreurUsername("Identifient est Incorrect");
    }
  }

  return (
    <div>
      <p>Connexion</p>
      <form onSubmit={(e) => SeConnecter(e)}>
        Identifient :
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <p>{ErreurUsername}</p>
        <br />
        password :
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <p>{ErreurPassword}</p>
        <br />
        <input type="submit" value="Se Connecter" />
      </form>
    </div>
  );
}
