import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAll, Delete } from "../config/actions";
import Menu from "../Components/Menu";
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
    <div>
      <Menu active="Panier" />
      <div className="mt-5 m-1">
        <div className="row">
          <div className="col-8">
            {Cart.length === 0 ? (
              <div className="alert alert-info m-5 text-center fw-bold">Découvrez nos produits et ajoutez une touche de magie à votre panier.</div>
            ) : (
              <table width="100%" className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Prix Untiaire</th>
                    <th>Quantite</th>
                    <th>Prix * Quantite (DH)</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {Cart.map((c, i) => (
                    <tr>
                      <td>
                        <img className="" src={c.image} alt="" width="50px" />
                      </td>
                      <td>
                        <p className="m-2">Name</p>{" "}
                      </td>
                      <td>
                        <p className="m-2">{c.prix}</p>
                      </td>
                      <td>
                        <p className="m-2">{c.quantite}</p>
                      </td>
                      <td>
                        <p className="m-2" style={{ textAlign: "left" }}>
                          {c.quantite * c.prix}
                        </p>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger m-2"
                          onClick={() => dispatch(Delete(c.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th>
                      <p className="m-2">Code Promo</p>
                    </th>
                    <td style={{ display: "flex" }}>
                      <input
                        type="text"
                        className="form-control m-2"
                        onChange={(e) => ChangeCodePromo(e.target.value)}
                        placeholder="Tapez Code Promo"
                      />
                    </td>
                    <th colSpan={2} style={{ textAlign: "end" }}>
                      <p className="m-2">Total : </p>
                    </th>
                    <th colSpan={2} style={{ textAlign: "left" }}>
                      <p className="m-2"> {total} DH </p>

                      {/* <button
                   className="btn btn-primary pay m-2"
                   onClick={() => dispatch(DeleteAll())}
                 >
                   Valider
                 </button> */}
                    </th>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="col-4">
            <div className="form-group m-3">
              <lable className="form-label">Nom :</lable>
              <input
                type="text"
                className="form-control"
                placeholder="Tapez ton nom"
              />
            </div>
            <div className="form-group m-3">
              <lable className="form-label">Téléphone :</lable>
              <input
                type="text"
                className="form-control"
                placeholder="Tapez ton Numéro téléphone"
              />
            </div>
            <div className="form-group m-3">
              <lable className="form-label">Adresse :</lable>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Tapez ton adresse"
              ></textarea>
            </div>
            <div className="form-group m-3 text-end">
              <button className="btn btn-primary m-1">Valider</button>
              <button className="btn  m-1">Vider</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
