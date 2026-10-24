import React from 'react'
import { useNavigate } from 'react-router-dom'

function Employe(props) {
  return (
    <>
        <div className="card-employe">
        {props.Imag}
        <h2>{props.name}</h2>
        </div>
    </>
  )
}

export default Employe