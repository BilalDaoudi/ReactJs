import React from "react";

function Header(prop){
    return (
        <header>
            <h2>hello {prop.nom}</h2>
        </header>
    )
}
export default Header;