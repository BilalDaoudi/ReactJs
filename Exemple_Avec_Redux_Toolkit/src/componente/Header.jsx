import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <NavLink to='/' className='Link'>Liste des employes</NavLink>
            <NavLink to='/Ajouter' className='Link'>Ajouter un employe</NavLink>
            <NavLink to='/Api' className='Link'>Api </NavLink>
        </nav>
    </header>
  )
}

export default Header