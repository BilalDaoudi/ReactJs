
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AjouterPersonne from './AjouterPersonne';
import ListePersonne from './ListePersonne';
import ModifierPersonne from './ModifierPersonne';

const App = () => {
return (    
<BrowserRouter> 
    <Routes>
        <Route exact path="/" element={<ListePersonne/>} />
        <Route path="/Ajouter" element={<AjouterPersonne/>} />
        <Route path="/Modifier/:id" element={<ModifierPersonne/>} />
    </Routes>
</BrowserRouter>
);
};

export default App;