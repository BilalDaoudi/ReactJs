import React from "react";
import ReactDOM from "react-dom/client";

import Incrementer_Decrementer from "./Exemple/inc_dec";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Incrementer_Decrementer nb="2" />)