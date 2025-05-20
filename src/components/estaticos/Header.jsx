import React from 'react'
import { Link } from 'react-router-dom'
import './styleEstatio.css'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/acercade'>Sobre Nosotros</Link></li>
                <li><Link to='/productos'>Galeria de Imagenes</Link></li>
                <li><Link to='/contactos'>Contactos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
