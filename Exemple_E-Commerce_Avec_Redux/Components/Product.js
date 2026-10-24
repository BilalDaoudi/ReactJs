import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const uri = "/Product/" + props.product.id;
  return (
<div className="col-lg-3 col-md-6 col-sm-6 mt-3">
  <div className="card p-2" style={{ marginLeft: '10px' }}>
    <div className="img-content">
      <Link to={uri}>
        <img className="card-img-top product-img" src={props.product.image} alt="" />
      </Link>
    </div>
    <div className="card-body">
      <strong>
        <p className="font-weight-bold">{props.product.name} - {props.product.model}</p>
      </strong>
      <p className="">RAM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {props.product.RAM}
      <br />Disque Dur : {props.product.Stockage}
      <br />Processeur &nbsp;: {props.product.Processeur}
      </p>
    </div>
    <div className="card-footer d-flex align-items-center justify-content-between">
      <strong>
        <p className="mb-0 text-primary font-weight-bold">{props.product.prix} MAD</p>
      </strong>
      <Link to={uri}>
        <button className="btn btn-primary" style={{ marginLeft: '10px' }}>
          <strong>Acheter</strong>
        </button>
      </Link>
    </div>
  </div>
</div>


  );
}
