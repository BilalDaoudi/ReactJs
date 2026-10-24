import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Personnes from "./Personnes";
import PersonneDetail from "./Personne";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function App() {
  const [personnes, setPersonnes] = useState([
    {
      id: 1,
      Nom: "Bilal",
      DateNaissance: "2002-12-09",
      Genre: "Homme",
      Loisir: ["football","lecture"],
      Nationalite: 'Maroc',
      Observation : "Developpeur ful stack"
    },
    {
      id: 2,
      Nom: "Nouzha",
      DateNaissance: "2003-12-09",
      Genre: "Femme",
      Loisir: ["Music","lecture"],
      Nationalite: 'Maroc',
      Observation : "Developpeur ful stack"
    },
  ]);

 

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Personnes" element={<Personnes personnes={personnes} />} />
          <Route path="/Personne/:id" element={<PersonneDetail  personnes={personnes} />} />
      </Routes>
    </BrowserRouter>
  );
}
