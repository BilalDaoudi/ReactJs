import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import DetailProduct from './Pages/ProductDetail';
import Panier from './Pages/Panier';
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/Product/:id' element={<DetailProduct />} />
                <Route path='/Panier' element={<Panier />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;