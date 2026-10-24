import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Afficher(props) {
  const [msg, setMsg] = useState(props.header);
  const [btn, setBtn] = useState(props.btn);

  
  // ------------ seulement aprés render ---------------------------------------
  // useEffect(function () {
  //   alert("render");
  // }, []);


  // ------------ aprés render et re-render ---------------------------------------
  // useEffect(function () {
  //   alert("render");
  // });

  
  // ------------ aprés render et les data a mofifier(data des argement) ---------------------------------------
  useEffect(function () {
    alert("modifier data");
  },[msg]);

  function Change() {
    if (btn == "Nouzha") {
      setMsg("Nouzha Bouabid né le 22/02/2004");
      setBtn("Bilal");
    } else {
      setMsg("Bilal Daoudi né le 09/12/2002");
      setBtn("Nouzha");
    }
  }

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={Change}> {btn}</button>
    </div>
  );
}
