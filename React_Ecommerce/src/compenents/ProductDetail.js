import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Add, Update } from "../config/actions";

export default function DetailProduct() {
  const { id } = useParams();

  const Product = useSelector((state) =>
    state.Products.find((p) => p.id === parseInt(id))
  );
  const FindCart = useSelector((state) =>
    state.Cart.filter((c) => c.id === parseInt(id))
  );

  const dispatch = useDispatch();
  const [quantiteProduct, setQuantite] = useState(1);
  const [totalProduct, setTotalProduct] = useState(
    Product.prix + Product.shipping
  );

  function ChangeQuantite(e) {
    const qt = e.target.value;
    if (qt >= 1) {
      setQuantite(qt);
      setTotalProduct(qt * Product.prix + Product.shipping);
    } else {
      setQuantite(1);
      setTotalProduct(Product.prix);
    }
  }
  // console.log(Product);

  function ActionCart() {
    const newCart = {
      id: Product.id,
      image: Product.image,
      prix: Product.prix,
      quantite: quantiteProduct,
      total: totalProduct,
    };
    if (FindCart.length === 0) dispatch(Add(newCart));
    else {
      newCart.total -= Product.shipping;
      dispatch(Update(newCart));
    }

    setQuantite(1);
    setTotalProduct(Product.prix + Product.shipping);
  }

  return (
    <div className="row">
      <div
        className="col-4
       card"
      >
        <img className="card-img-top" src={Product.image} alt="" />
      </div>
      <div className="col-7">
        <p className="card-text">{Product.discription}</p>
        <hr />
        <p className="card-title">
          <b>Prix : MAD {Product.prix}</b>
        </p>
        <br /> <br /> <br />
        <input
          type="number"
          value={quantiteProduct}
          onChange={ChangeQuantite}
          className="form-control"
        />
        <span>
          {Product.shipping === 0 ? "" : "Shipping + MAD " + Product.shipping}
        </span>
        <br />
        <br />
        <p>Total : MAD {totalProduct}</p>
        <button className="btn btn-primary" onClick={ActionCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
