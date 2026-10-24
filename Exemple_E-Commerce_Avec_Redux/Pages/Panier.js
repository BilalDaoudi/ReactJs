import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAll, Delete } from "../config/actions";
import Menu from "../Components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaTrash } from 'react-icons/fa';

export default function Panier() {
  const Cart = useSelector((state) => state.Cart);
  const CodePromo = useSelector((state) => state.CodePromo);
  const [total, setTotal] = useState(
    Cart.length === 0
      ? 0
      : Cart.reduce((total, c) => (total += c.prix * c.quantite), 0)
  );
  const dispatch = useDispatch();

  function ChangeCodePromo(val) {
    const code = CodePromo.find((c) => c.Code === val);
    if (code !== undefined) {
      setTotal(total - (total * code.remise) / 100);
    } else {
      setTotal(
        Cart.length === 0
          ? 0
          : Cart.reduce((total, c) => (total += c.prix * c.quantite), 0)
      );
    }
  }

  return (
    <div className="">
      <Menu active="Panier" />

      <div className="mt-5 m-1">
        <div className="mb-3">
          <h4 style={{ marginLeft: "20px", fontWeight: "bold", color: "gray" }}>
            Ton Articles{" "}
          </h4>
        </div>
        <div className="row">
          <div className="col-md-8">
            {Cart.length === 0 ? (
              <div className="alert alert-info m-5 text-center fw-bold">
                Découvrez nos produits et ajoutez une touche de magie à votre
                panier.
              </div>
            ) : (
              <table className="table table-striped table-hover text-center table-bordered cart-table">
                <thead className="table">
                  <tr>
                    <th colSpan={2}>PC Portables</th>
                    <th>Prix Unitaire</th>
                    <th>Quantité</th>
                    <th>Prix * Quantité (DH)</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {Cart.map((c) => (
                    <tr key={c.id}>
                      <td>
                        <img src={c.image} alt="" width="50px" />
                      </td>
                      <td className="p-3">{c.name}</td>
                      <td className="p-3">{c.prix}</td>
                      <td className="p-3">{c.quantite}</td>
                      <td className="p-3">{(c.quantite * c.prix).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn text-danger"
                          style={{fontSize : "18px"}}
                          onClick={() => dispatch(Delete(c.id))}
                          title="Supprimer"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th colSpan={1} className="">
                      <label className="form-label m-2">Code Promo:</label>
                    </th>
                    <td colSpan={2}>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => ChangeCodePromo(e.target.value)}
                        placeholder="Tapez Code Promo"
                      />
                    </td>
                    <th colSpan={1} className="">
                      <label className="form-label m-2">Total</label>
                    </th>
                    <th colSpan={2} className="">
                      <p className="m-2">{total.toFixed(2)} DH</p>
                    </th>
                  </tr>
                </tbody>{" "}
              </table>
            )}
          </div>
          <div className="col-md-4">
            <div className="card h-100 card-infomration">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Informations :</h5>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nom :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Téléphone :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="numéro de téléphone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Adresse :</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Votre adresse"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-auto text-end">
                    <button
                      type="button"
                      onClick={() => dispatch(DeleteAll())}
                      className="btn btn-primary me-2"
                    >
                      Valider
                    </button>
                    <button type="reset" className="btn">
                      Vider
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
