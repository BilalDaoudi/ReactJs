import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inscription from "./component/inscription";
import Login from "./component/Login";

const App = () => {
return ( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/inscription" element={<Inscription/>} />
            {/* <Route path="/Admin/Modifier/:id" element={} /> */}
        </Routes>
    </BrowserRouter>
);
};


export default App;