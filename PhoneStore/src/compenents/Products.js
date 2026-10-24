import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
  const Products = useSelector(state => state.Products);
 

  return (
    <div className="row">
      {Products.map((p, i) => (
        <Product key={i} product={p} />
      ))} 
    </div>
  );
}
