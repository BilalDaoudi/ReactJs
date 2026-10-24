export default function Table(props) {
  
  return (
    <div>
      <table width="100%" className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Date de naissance</th>
            <th>genre</th>
            <th>Loisir</th>
            <th>Nationalite</th>
            <th>Observation</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {props.table.map((t, index) => (
            <tr key={index}>
              <td>{t.id}</td>
              <td>{t.Nom}</td>
              <td>{t.DateNaissance}</td>
              <td>{t.Genre}</td>
              <td>{t.Loisir.join("-")}</td>
              <td>{t.Nationalite}</td>
              <td>{t.Observation}</td>
              <td>
                <button className="btn btn-primary" onClick={() => props.supprimer(t.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
