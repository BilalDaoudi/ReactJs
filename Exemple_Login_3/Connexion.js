import React, { useState } from "react";
import IsLogin from "./IsLogin";

export default function Connexion(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUSer] = useState({});
  const [loginUser, setLoginUser] = useState(false);
  const [ereurLogin, setEreurLogin] = useState("");
  const [ereurPassword, setEreurPassword] = useState("");

  const isLogin = () => {
    const user = props.users.find((u) => u.UserName === login);
    if (user !== undefined) {
      if (user.Password === password) {
        setLoginUser(true);
        setUSer(user);
      }else{
        setEreurPassword("Password incorrect")
      }
      setEreurLogin("")
    }else{
        setEreurPassword("")
        setEreurLogin("User Name incorrect")
    }
  };

  return (
    <div>
      {loginUser === false ? (
        <form>
          <label>Login : </label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <span>{ereurLogin}</span>
          <br />
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <span>{ereurPassword}</span>
          <br />
          <input type="button" value="Connexion" onClick={isLogin} />
        </form>
      ) : (
        <IsLogin user={user} />
      )}
    </div>
  );
}
