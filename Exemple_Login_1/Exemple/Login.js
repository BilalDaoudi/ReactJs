import React, { useState } from "react";

export default function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  function subchange(e) {
    e.preventDefault();
    props.getuser(login, password);
  }

  return (
    <div className="login" onSubmit={subchange}>
      <form>
        <div className="form-groupe m-3">
          <label>Login</label>
          <input
            type="text"
            className="form-control"
            onChange={(val) => setLogin(val.target.value)}
          />
        </div>
        <div className="form-groupe m-3">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            onChange={(val) => setPassword(val.target.value)}
          />
        </div>
        <div className="form-groupe m-3">
          <input type="submit" value="Login" className="btn btn-info" />
        </div>
      </form>
    </div>
  );
}
