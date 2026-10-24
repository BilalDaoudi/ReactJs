import React from "react";

import { Link } from "react-router-dom";

export default function ArticleDetail(prop){
    return (
        <div>

            <h1>{prop.articles.description}</h1>            
            <img src={prop.articles.image} alt={prop.articles.description}/>
            <p>{prop.articles.prix} DH</p>
            <Link to="/">Aller vers la page d'accueil</Link>
        </div>
    )
}