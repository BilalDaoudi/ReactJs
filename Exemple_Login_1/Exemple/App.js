import React, { useState } from "react";
import Login from "./Login";
import Accueil from "./Accueil";

export default function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [errorMessageslogin, setErrorMessageslogin] = useState("");
  const [errorMessagespass, setErrorMessagespass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ];
  const errors = {
    uname: "Votre identifiant est incorrect.",
    upass: "Votre mot de passe est incorrect.",
  };

  function changesub(a, b) {
    const user = database.filter((e) => e.username === a);

    if (user.length != 0) {
      setName(a);
      if (user[0].password == b) {
        setPass(b);
        setIsSubmitted(true);
        setErrorMessageslogin("");
        setErrorMessagespass("");
      } else {
        setPass(" ");
        setErrorMessageslogin("");
        setErrorMessagespass(errors.upass);
      }
    } else {
      setName(" ");
      setErrorMessagespass("");
      setErrorMessageslogin(errors.uname);
    }
  }

  return (
    <div>
      <p className="text-danger">
        {isSubmitted == false && name == "" ? "" : errorMessageslogin}
      </p>
      <p className="text-danger">
        {isSubmitted == false && pass == "" ? "" : errorMessagespass}
      </p>

      {isSubmitted ? <Accueil nom={name} /> : <Login getuser={changesub} />}
    </div>
  );
}
