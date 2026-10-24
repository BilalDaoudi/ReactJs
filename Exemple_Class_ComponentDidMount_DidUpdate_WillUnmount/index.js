import React from 'react';
import ReactDOM from "react-dom/client";
import App from './Exemple/App';


// import Afficher from './Exemple/Component';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App affiche={false} header="Bilal né le 09/12/2002" btn="Nouzha" />);
