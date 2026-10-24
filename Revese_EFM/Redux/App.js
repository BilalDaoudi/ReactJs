import React from "react";
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Personnes from "./pages/Pesronnes";
import Modifier from './pages/Modifier';
import Ajouter from "./pages/Ajouter";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ajouter" element={<Ajouter />} />
        <Route path="/Modifier/:id" element={<Modifier />} />
        <Route path="/Personnes" element={<Personnes />} />
      </Routes>
    </BrowserRouter>
  );
}


