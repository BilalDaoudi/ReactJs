import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div>
        <div className="home">
          <h1>Bienvenue sur mon site web</h1>
          <p>Ceci est la page d'accueil de mon site web.</p>
          <p>Je vends des produits incroyables à des prix abordables.</p>
          <a href="/Products">Acheter maintenant</a>
        </div>
      </div>
    </div>
  );
}
