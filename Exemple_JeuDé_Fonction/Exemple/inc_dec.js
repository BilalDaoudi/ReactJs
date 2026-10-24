import React, { useState } from "react";

export default function Incrementer_Decrementer(props) {
  const [face, setface] = useState("");
  const [fin, setfin] = useState(false);
  const [compteur, setcompteur] = useState(0);
  const [imgface, setimgface] = useState("");

  function jouer() {
    let valeur = Math.floor(Math.random() * 6) + 1;
    if (fin == false) {
      if (props.nb == valeur) {
        setfin(true);
      }
      setimgface("./images/face" + valeur + ".png");
      setface(valeur);
      setcompteur(compteur + 1);
    }
  }

  function rejouer() {
    setfin(false);
    setface("");
    setcompteur(0);
    setimgface("");
  }

  return (
    <>
      <img src="./images/init.png" />

      <p>face : {face}</p>

      {imgface != "" ? <img src={imgface} /> : ""}

      <p>Nombre d'essais : {compteur}</p>

      {fin ? <p>Bravo</p> : ""}

      {fin ? (
        <button onClick={rejouer}>Rejouer</button>
      ) : (
        <button onClick={jouer}>Jouer</button>
      )}
    </>
  );
}
