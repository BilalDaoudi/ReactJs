
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AjouterArticle from './AjouterArticle';
import ListeArticles from './ListeArticles';
import ModifierArticle from './ModifierArticle';

const App = () => {
return (    
<BrowserRouter> 
    <Routes>
        <Route exact path="/" element={<ListeArticles/>} />
        <Route path="/Ajouter" element={<AjouterArticle/>} />
        <Route path="/Modifier/:id" element={<ModifierArticle/>} />
    </Routes>
</BrowserRouter>
);
};


export default App;