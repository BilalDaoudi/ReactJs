
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Ajouter } from './actions';
import { Link } from 'react-router-dom';    


const AjouterArticle = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const Articles = useSelector((data) => data.Articles);
  const newid = Articles.length === 0 ? 1 : Articles[Articles.length-1].id + 1;
  const dispatch = useDispatch();
  const AjouterArt = () => {
    const article = {id: newid, title,body};
    dispatch(Ajouter(article));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
      <Link onClick={AjouterArt} to="/"><button >Add article</button></Link>
    </div>
  );
};

export default AjouterArticle;



