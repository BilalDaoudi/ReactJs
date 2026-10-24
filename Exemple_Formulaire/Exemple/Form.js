import React, { useState } from "react";

export default function Form() {
  const [cin, setCIN] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [datenaissance, setDateNaissance] = useState("");
  const [genre, setGenre] = useState("");
  const [loisir, setLoisir] = useState([]);

  function loisirchoisir(val) {
    if (loisir.includes(val)) setLoisir(loisir.filter((l) => l !== val));
    else setLoisir([...loisir, val]);
  }

  function AfficherAlert(e) {
    e.preventDefault();
    alert(
      `${cin} ${nom} ${prenom} ${datenaissance} ${genre} ${loisir.join(" , ")}`
    );
  }

  return (
    <div className="row">
      <div className="col-4">
        <form onSubmit={AfficherAlert}>
          <div className="form-group">
            <label for="">CIN : </label>
            <input
              type="text"
              className="form-control"
              value={cin}
              onChange={(e) => setCIN(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="">Nom : </label>
            <input
              type="text"
              value={nom}
              className="form-control"
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="">Prénom : </label>
            <input
              type="text"
              value={prenom}
              className="form-control"
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label for="">Date de naissance : </label>
            <input
              type="date"
              value={datenaissance}
              className="form-control"
              onChange={(e) => setDateNaissance(e.target.value)}
              required
            />
          </div>
          <div className="form-check">
            <p>Genre :</p>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  name="genre"
                  value="homme"
                  checked={genre === "homme" ? true : false}
                  onChange={(e) => setGenre(e.target.value)}
                />
                Homme
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  name="genre"
                  value="femme"
                  checked={genre === "femme" ? true : false}
                  onChange={(e) => setGenre(e.target.value)}
                />
                Femme
              </label>
            </div>
          </div>
          <div className="form-check">
            <p>loisir :</p>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  value="football"
                  class="form-check-input"
                  checked={loisir.includes("football") ? true : false}
                  onChange={(e) => loisirchoisir(e.target.value)}
                />
                football
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  value="lecture"
                  class="form-check-input"
                  checked={loisir.includes("lecture") ? true : false}
                  onChange={(e) => loisirchoisir(e.target.value)}
                />
                Lecture
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  value="programmation"
                  class="form-check-input"
                  checked={loisir.includes("programmation") ? true : false}
                  onChange={(e) => loisirchoisir(e.target.value)}
                />
                Programmation
              </label>
            </div>
          </div>
        <div className="input_btn">
          <input type="submit" class="btn btn-secondary" value="Alert" />
        </div>
          
        </form>
      </div>
      <div className="col-8">
        <table className="table table-hover  table-sm table-danger table-bordered">
          <tr>
            <th width="10%">CIN</th>
            <th width="10%">Nom</th>
            <th width="10%">Prénom</th>
            <th width="10%">Date de Naissance</th>
            <th width="10%">Genre</th>
            <th width="20%">Loisir</th>
          </tr>
          <tr>
            <td height={30}>{cin}</td>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{datenaissance}</td>
            <td>{genre}</td>
            <td>{loisir.join(" - ")}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
