import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Modifier } from "./actions";
import { Link } from "react-router-dom";

const ModifierArticle = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.Articles.find((article) => article.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);
  const ModifierArt = () => {
    const modifierPresonne = { ...article, title,body };
    dispatch(Modifier(modifierPresonne));
  };

  return (
    <div>
      <h1>Modifier Article ID : {id}</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
      <Link onClick={ModifierArt} to="/">
        <button>Modifier</button>
      </Link>
    </div>
  );
};

export default ModifierArticle;
