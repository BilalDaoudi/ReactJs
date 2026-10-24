import { useState } from "react";
import Login from "./Components/Login";
import Connecter from "./Components/Connecter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  function loginUser(etat, userlogin) {
    setIsLogin(etat);
    setUser(userlogin);
  }

  return (
    <div>
      <BrowserRouter>
        {isLogin === false ? (
          <Login loginuser={loginUser} />
        ) : (
          <Connecter user={user} />
        )}
      </BrowserRouter>
    </div>
  );
}
