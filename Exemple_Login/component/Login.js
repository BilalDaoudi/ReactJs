import { useState } from "react";
import { useSelector } from "react-redux";
import IsLogin from "./IsLogin";

export default function Login() {
  const Users = useSelector((data) => data.users);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [UserLogin, setUserlogin] = useState({});

  function Connect(e) {
    e.preventDefault();
    const findUser = Users.find(
      (u) => u.username === login && u.password === password
    );
    if (findUser === undefined) {
      setIslogin(false);
    } else {
      setIslogin(true);
      setUserlogin(findUser);
    }
  }

  return (
    <div>
      {islogin === true ? (
        <IsLogin user={UserLogin} />
      ) : (
        <div>
          <form onSubmit={(e) => Connect(e)}>
            <label>Login : </label> <br />
            <input type="text" onChange={(e) => setLogin(e.target.value)} />
            <br />
            <label>Password : </label> <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      )}
    </div>
  );
}
