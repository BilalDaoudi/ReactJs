import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        Image: 'https://tap-easy.com/wp-content/uploads/2015/12/master-your-success.jpg',
        nom: 'Zaid',
        prenome: 'Riyad',
        function: 'Ingenieur'
    },
    {
        Image: 'ps1.jpg',
        nom: 'Riyad',
        prenome: 'Riyad',
        function: 'Ingenieur'
    },
    {
        Image: 'pic-2.png',
        nom: 'Manal',
        prenome: 'Riyad',
        function: 'Ingenieur'
    },
    {
        Image: 'pic-4.png',
        nom: 'Zineb',
        prenome: 'Riyad',
        function: 'Ingenieur'
    },
]
const Employe_Slice = createSlice({
    name : 'Employes',
    initialState,
    reducers: {
        Add_Employe(state , action){
            state.push(action.payload)
        }
    }
})

export const Employes_Reducers = Employe_Slice.reducer ;
export const  {Add_Employe} = Employe_Slice.actions ; 