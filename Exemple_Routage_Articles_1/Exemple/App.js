import React from "react";
import Articles from "./All";
import ArticleDetail from "./ArticleDetail";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const T_Articles = [
  { id: 1, image: "/images/face1.png", description: "Face 1", prix: "199" },
  { id: 2, image: "/images/face2.png", description: "Face 2", prix: "299" },
  { id: 3, image: "/images/face3.png", description: "Face 3", prix: "399" },
  { id: 4, image: "/images/face4.png", description: "Face 4", prix: "499" },
];


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Articles Arts={T_Articles} />} />
        {T_Articles.map(Art => <Route key={Art.id} path={"/Product/"+Art.id} element={<ArticleDetail  articles={Art} />} />)}
      </Routes>
  </BrowserRouter>
  );
}

