import React from "react";


export default function Article(props){
    return(
        <div className="article">
            <img src={props.image} />
            <p className="art-title">{props.title}</p>
            <p className="art-prix">
                {
                    props.Reduprix == 0 ? 
                    <span className="sans-redu">${props.prix}</span> : 
                    <div className="prix-redu"><span className="prix1">${props.prix}</span><span className="prix2"> ${props.Reduprix}</span></div>
                } 
            </p>
            <button>Add to cart</button>
        </div>
    )
}