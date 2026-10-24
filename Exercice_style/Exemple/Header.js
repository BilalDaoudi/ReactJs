import React from "react";


export default function Header(){
    return(
        <div className="header">
            <div className="title-header">Start Bootstrap</div>
            <div className="menu">
                <ul>
                   <a href=""><li>Home</li></a>
                   <a href=""><li>About</li></a>
                   <a href=""><li>Shop</li></a>
                </ul>
            </div>
            <div className="cart">
                <button className="btn-cart">Cart <span className="nbcart"> 0 </span></button>
            </div>
        </div>
    )
}