import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const uri = "/Product/" + props.product.id;
  return (
    <div className="col-5 card p-2">
      <div className="detail-card">
        <div className="img-content">
          <Link to={uri}>
            <img
              className="card-img-top product-img"
              src={props.product.image}
              alt=""
            />
          </Link>
        </div>
        <div className="info-content p-2">
          <p className="">Marque : {props.product.marque}</p>
          <p className="">Model : {props.product.model}</p>
          <p className="">Prix : {props.product.prix} MAD</p>
          <p className="">
          <Link to={uri}>
              <button className="btn btn-primary">Acheter</button>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
