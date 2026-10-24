import React from "react";
import Article from "./Article";

export default function Articles(props){
    const AfficheArticles = props.articles.map(
        art => <Article image={art.image} title={art.title} prix={art.prix} Reduprix={art.reductionprix} />
    )
    return(
        <div className="articles">
            {AfficheArticles}
           
        </div>
    )
}