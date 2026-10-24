import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const Cart = useSelector((state) => state.Cart);
  let Home = "nav-link ";
  let About = "nav-link ";
  let Contact = "nav-link ";
  let Products = "nav-link ";
  let Panier = "nav-link ";
  if (props.active === "Home") Home += "active";
  if (props.active === "About") About += "active";
  if (props.active === "Contact") Contact += "active";
  if (props.active === "Products") Products += "active";
  if (props.active === "Panier") Panier += "active";
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PCZone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={Home} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={Products} to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className={Panier} to="/Panier">
                Panier
              </Link>
            </li>
            <li className="nav-item">
              <Link className={About} to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={Contact} to="/Contact">
                Contact
              </Link>
            </li>
          </ul>

          <span className="navbar-text">
            <Link className={Panier} to="/Panier">
              <div class="cart-icon" data-count={Cart.length}>
                <i class="fa fa-shopping-cart"></i>
              </div>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
