import React from "react";
import { Link } from "react-router-dom";

export default function Product(prop){
    
    return (
        <div className="Art" >
            <p><Link to={"/Product/" + prop.article.id}> <img src={prop.article.image} alt={prop.article.description}/></Link></p>
            <p>{prop.article.description}</p>
            <p>{prop.article.prix} DH</p>
            <button>Ajouter au panier</button>
        </div>
    )
}