import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Menu() {
  
  const Cart = useSelector((state) => state.Cart);
  return (
    <div className="row">
      <div className="col-2 p-3 text-xxl-center title">PhoneStore</div>
      <div className="col-9">
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            <Link className="nav-link" to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link className="nav-link" to="/Products">
              <li className="nav-item">Products</li>
            </Link>
            <Link className="nav-link" to="/Cart">
              <li className="nav-item">Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="col-1 count">
        <Link to="/Cart">
          <span>
          <i class="fas fa-shopping-cart"></i>
          {Cart.length}
          </span>
          </Link>
      </div>
    </div>
  );
}
