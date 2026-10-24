import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Users from "./Pages/Users";


export default function App(){
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/users" element={<Users />} />
        </Routes>
    </BrowserRouter>)
}