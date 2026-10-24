import React from "react";

export default function Product(prop){
    return (
        <div className="Art">
            <img src={prop.image}/>
            <p>{prop.description}</p>
            <p>{prop.prix} DH</p>
            <button>Ajouter au panier</button>
        </div>
    )
}