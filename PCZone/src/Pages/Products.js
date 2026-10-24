import React from "react";
import { useSelector } from "react-redux";
import Product from "../Components/Product";
import Menu from "../Components/Menu";

export default function Products() {
  const Products = useSelector((state) => state.Products);

  return (
    <div>
      <Menu active="Products" />
      <div className="">
        <div className="row">
          {Products.map((p, i) => (
            <Product key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
