import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Product from "../Components/Product";
import Menu from "../Components/Menu";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin , FaWhatsapp } from 'react-icons/fa';


export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const Products = useSelector((state) => state.Products);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div  className="">
      <Menu active="Products" />

      <div className="">
        <div className="search-bar w-50">
          <input
            type="text"
            placeholder="Rechercher un produit par marque ..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon m-2" />
        </div>

        <div className="m-3 text-center">
          <h5>Liste des PC portables disponibles</h5>
        </div>
        <div className="row">
          {searchTerm === ""
            ? Products.map((p, i) => <Product key={i} product={p} />)
            : (Products.filter((product) =>
                product.name.toUpperCase().includes(searchTerm.toUpperCase())
              ).length === 0 ? <div className="alert text-center fw-bold alert-danger p-5 mt-5 m-5 col">N'est pas disponibles les PC Portables de Marque :  <span style={{fontSize : "25px"}}>" {searchTerm} "</span></div> : Products.filter((product) =>
              product.name.toUpperCase().includes(searchTerm.toUpperCase())
            ).map((p, i) => <Product key={i} product={p} />) )}
        </div>

        <footer className="footer m-3">
          <div className="footer-section">
            <h3>À propos de nous</h3>
            <p>
              Bienvenue sur notre site de vente de PC portables ! Chez nous,
              vous trouverez une large sélection d'ordinateurs portables haut de
              gamme, adaptés à tous vos besoins professionnels et personnels.
            </p>
          </div>
          <div className="footer-section">
            <h3>Notre mission</h3>
            <p>
              Notre mission est de fournir à nos clients les meilleurs PC
              portables du marché, alliant performance, fiabilité et design
              élégant. Nous nous efforçons de vous offrir une expérience d'achat
              exceptionnelle, en vous proposant un large choix de marques et de
              modèles, ainsi qu'un service clientèle de qualité.
            </p>
          </div>
          <div className="footer-section">
            <h3>Réseaux sociaux</h3>
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{fontSize : "30px"}}>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{fontSize : "30px"}}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{fontSize : "30px"}}>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{fontSize : "30px"}}>
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{fontSize : "30px"}}>
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
