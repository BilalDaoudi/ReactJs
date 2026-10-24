import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Add, Update } from "../config/actions";
import Menu from "../Components/Menu";

export default function DetailProduct() {
  const { id } = useParams();

  const Product = useSelector((state) =>
    state.Products.find((p) => p.id === parseInt(id))
  );
  const Carts = useSelector((state) => state.Cart);
  const FindCart = useSelector((state) =>
    state.Cart.filter((c) => c.id === parseInt(id))
  );

  const dispatch = useDispatch();
  const [quantiteProduct, setQuantite] = useState(1);
  const [totalProduct, setTotalProduct] = useState(Product.prix);

  function ChangeQuantite(e) {
    const qt = e.target.value;
    if (qt >= 1) {
      setQuantite(qt);
      setTotalProduct(qt * Product.prix);
    } else {
      setQuantite(1);
      setTotalProduct(Product.prix);
    }
  }

  function ActionCart() {
    const newCart = {
      id: Product.id,
      image: Product.image,
      prix: Product.prix,
      quantite: quantiteProduct
    };
    if (FindCart.length === 0) dispatch(Add(newCart));
    else {
      dispatch(Update(newCart));
    }
    setQuantite(1);
    setTotalProduct(Product.prix);
    console.log(Carts);
  }

  return (
    <div>
      <Menu active="ProductDetail" />
      <div className="container mt-5">
        <div className="row detail-product">
          <div className="col-5">
            <img
              className="card-img-top border-img"
              src={Product.image}
              alt=""
            />
          </div>
          <div className="col-7">
            <table>
              <tr>
                <th className="p-2">Marque </th>
                <td>: {Product.marque}</td>
              </tr>
              <tr>
                <th className="p-2">Model </th>
                <td>: {Product.model}</td>
              </tr>
              <tr>
                <th className="p-2">RAM </th>
                <td>: {Product.RAM}</td>
              </tr>
              <tr>
                <th className="p-2">Processeur </th>
                <td>: {Product.Processeur}</td>
              </tr>
              <tr>
                <th className="p-2">Stockage </th>
                <td>: {Product.Stockage}</td>
              </tr>
              <tr>
                <th className="p-2">Prix </th>
                <td>: {Product.prix} DH</td>
              </tr>
            </table>
            <br />
            <input
              type="number"
              className="form-control w-50 mb-2"
              value={quantiteProduct}
              onChange={ChangeQuantite}
            />
            <table>
              <tr >
                <th>Total </th>
                <td>: {totalProduct} DH</td>
              </tr>
            </table>
            <button className="btn btn-primary mt-2" onClick={ActionCart}>
              Ajouter Au Panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
