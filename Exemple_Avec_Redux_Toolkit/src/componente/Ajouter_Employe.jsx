import React, { useState } from 'react'
import { Add_Employe } from '../Redux/EmployeSlice'
import { useDispatch } from 'react-redux'

export default function Ajouter_Employe() {
    const [Image ,  setImage] = useState('')
    const [Nom , setNom] = useState('')
    const [prenom , setPrenom] = useState('')
    const [func , setFunc] = useState('')
    const dispatch = useDispatch()
    const  Ajouter=()=>{
       dispatch(Add_Employe({Image : Image , nom : Nom , prenom : prenom , function : func }))
    }
  return (
    <main>
        <div className="card-employe">
           <input type="File" style={{width: "300px" , height: "30px" , border : '1px solid ' , padding: '3px'}} onChange={(e) => setImage(e.target.value)}/>
           <input type="text"   style={{width: "300px" , height: "30px" , paddingLeft: '3px'}} placeholder="Enter nom" onChange={(e) => setNom(e.target.value)}/>
           <input type="text"  style={{width: "300px" , height: "30px" , paddingLeft: '3px'}} placeholder="Enter prenome" onChange={(e) => setPrenom(e.target.value)} />
           <input type="text"   style={{width: "300px" , height: "30px " , paddingLeft: '3px'}} placeholder="Enter Function" onChange={(e) => setFunc(e.target.value)} />
           <button onClick={Ajouter} style={{width: "300px" , height: "30px" , color: "#fff " , background: "#000" , fontWeight : 'bold'}}>Ajouter</button>
        </div> 
    </main>
  )
}
