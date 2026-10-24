import React from "react";
import Menu from "./compenents/Menu";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Products from "./compenents/Products";
import Home from "./compenents/Home";
import DetailProduct from "./compenents/ProductDetail";
import Cart from "./compenents/Cart";



export default function App(){
    return(
            
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Products" element={<Products/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/ProductDetail/:id" element={<DetailProduct/>}/>
                </Routes>
            </BrowserRouter>
    )
}