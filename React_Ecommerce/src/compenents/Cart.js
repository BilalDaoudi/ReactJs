import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAll,Delete } from "../config/actions";

export default function Products() {
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  

  return (
    <div>
      <div className="row">
        {Cart.map((c, i) => (
          <div key={i} className="col-2 m-4">
            <img className="card-img-top" src={c.image} alt="" />
            <div className="card-body">
              <p className="card-title">Prix : MAD{c.prix}</p>
              <p className="card-text">Quantité : {c.quantite}</p>
              <p className="card-text">Total : {c.total}</p>
              <button className="btn btn-secondary" onClick={() => dispatch(Delete(c.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="info">
            {Cart.length === 0 ? <p>Total 0 $</p> : <p><strong>TOTAL : MAD {Cart.reduce((total,c) => total += c.total , 0)} </strong></p>}
            <br/>
            <button className="btn btn-primary pay" onClick={()=>dispatch(DeleteAll())}> Pay</button>
      </div>
    </div>
  );
}
