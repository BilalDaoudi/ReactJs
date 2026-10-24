import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ajouter_Employe from './componente/Ajouter_Employe'
import EmployeList from './componente/EmployeList'
import Header from './componente/Header'
import './App.css'
import EmployeDetail from './componente/EmployeDetail'
import Apiex from './componente/Apiex'
import axios from 'axios'

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<><Header/><EmployeList/></>}/>
        <Route path='/Ajouter' element={<><Header/><Ajouter_Employe/></>}/>
        <Route path='/EmployeDetail/:Nom' element={<><EmployeDetail/></>}/>
        <Route path='/Api' element={<><Header/><Apiex/></>}/>
        <Route/>
       </Routes>
    </BrowserRouter>
  )
}


// [
//   npx create-react-app exam-regionale
//   npm start
//   npm i react-router-dom
//   npm i react-redux 
//   npm i @reduxjs/toolkit
//   npm i axios
// ]