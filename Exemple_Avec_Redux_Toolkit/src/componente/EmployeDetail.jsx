import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function EmployeDetail() {
    const Nom = useParams().Nom
    const Employes = useSelector((state) => state.Employes)
    const Nav = useNavigate('')
  return (
   <> {
     Employes.map((e) => 
     Nom === e.nom ?
      <div style={{textAlign: 'center' , marginTop: '50px' , fontWeight: 'bold'}}>
        <img src={e.Image} alt="....." width={300}/><br />
        {e.nom + ' ' + e.prenome}<br/>
        {e.function}<br/><br />
        <button style={{textAlign: 'center'}} onClick={() => Nav('/')}>Show All Employes</button>
      </div> : ""
     )
    }
     
    </>
  )
}
