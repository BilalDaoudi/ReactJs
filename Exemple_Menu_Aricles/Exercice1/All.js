import React from "react";
import Product from "./ArticleOrd";

function Menu() {
  return (
    <div className="divMenu">
      <ul className="Menu">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Service</li>
      </ul>
    </div>
  );
}

export default function Articles() {
  return (
    <>
      <div className="header">
          <Menu />

      </div>
      <div className="AllArt">
        <Product image="./logo192.png" description="Bilal daoudi" prix="199" />
        <Product image="./logo192.png" description="Bilal daoudi" prix="199" />
        <Product image="./logo192.png" description="Bilal daoudi" prix="199" />
        <Product image="./logo192.png" description="Bilal daoudi" prix="199" />
      </div>
    </>
  );
}
