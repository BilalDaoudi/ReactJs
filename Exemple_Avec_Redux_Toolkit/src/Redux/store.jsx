import { configureStore } from "@reduxjs/toolkit";
import { Employes_Reducers } from "./EmployeSlice";

const store = configureStore({
    reducer : {
        Employes : Employes_Reducers
    }
});

export default store;