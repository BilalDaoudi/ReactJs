import React from "react";
import Header from "./header";
import Social from "./social";

function All() {
  
  return (
    <>
      <Header nom={prompt("Tapez le Nom:")} />
      <ul>
        <Social nom="Facebook" />
        <Social nom="Twitter" />
        <Social nom="Instagram" />
      </ul>
      
    </>
    
  );
}

export default All;
