import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const uri = "/ProductDetail/" + props.product.id;
  return (
    <div className="col-3 card">
      <Link to={uri}>
        <img className="card-img-top" src={props.product.image} alt="" />
      </Link>
      <div className="card-body">
        <p className="card-title">MAD{props.product.prix}</p>
        <p className="card-text">{props.product.discription}</p>
        <p>
          {props.product.shipping === 0
            ? "Free Shipping"
            : "+Shipping: MAD " + props.product.shipping}
        </p>
      </div>
    </div>
  );
}
