import { useSelector, useDispatch } from "react-redux";
import { Supprimer } from "./actions";
import { Link } from "react-router-dom";

const ListeArticles = () => {
  const Articles = useSelector((state) => state.Articles);
//   console.log(Articles);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/Ajouter`}><button>Nouvelle Article</button></Link>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Articles.map((art,index) => (
            <tr key={index}>
              <td>{art.id}</td>
              <td>{art.title} </td>
              <td>{art.body}</td>

              <td>
                <button onClick={() => dispatch(Supprimer(art.id))}>
                  Supprimer
                </button>
                <Link to={`/Modifier/${art.id}`}> 
                  <button>Modifier</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeArticles;
