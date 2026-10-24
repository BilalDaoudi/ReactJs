export default function Table(props) {


  return (
    <div>
      <table width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Equipe</th>
            <th>Numéro</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {props.table.map((t, index) => (
            <tr key={index}>
              <td>{t.id}</td>
              <td>{t.Nom}</td>
              <td>{t.Equipe}</td>
              <td>{t.Num}</td>
              <td><button onClick={() => props.supprimer(t.id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
