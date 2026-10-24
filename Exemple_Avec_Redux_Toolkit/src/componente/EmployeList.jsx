import React from 'react'
import { useSelector } from 'react-redux'
import Employe from './Employe'

function EmployeList() {
    const Employes = useSelector((state) => state.Employes)
    const ImageEmployes = Employes.map((e) => 
        <img src={e.Image} alt="..." height={200} style={{border: '0.3pc solid'}}/>
    )
    const NameEmployes = Employes.map((e) => 
    <>{e.nom}</>
)
  return (
    <main>
      <Employe Imag={ImageEmployes[0]} name={NameEmployes[0]}/> 
      <Employe Imag={ImageEmployes[1]} name={NameEmployes[1]}/>
      <Employe Imag={ImageEmployes[2]} name={NameEmployes[2]}/>
      <Employe Imag={ImageEmployes[3]} name={NameEmployes[3]}/>
      <Employe Imag={ImageEmployes[4]} name={NameEmployes[4]}/>
      <Employe Imag={ImageEmployes[5]} name={NameEmployes[5]}/>
      <Employe Imag={ImageEmployes[6]} name={NameEmployes[6]}/>
    </main>
  )
}

export default EmployeList