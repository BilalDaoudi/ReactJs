import React from "react";
import Product from "./ArticleOrd";

export default function Articles(props) {
  return (
    <div className="AllArt">
      {props.Arts.map((Art) => (
        <Product key={Art.id} article={Art} />
      ))}
    </div>
  );
}
