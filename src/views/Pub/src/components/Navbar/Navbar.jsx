import { useState } from 'react'
import botaoMenu from '../../botaoMenu.png'
import '../Navbar/navbar.css'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={botaoMenu} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/listar">Listar</NavLink>
            </li>
            <li>
              <NavLink to="/criar">Criar</NavLink>
            </li>
            <li>
              <NavLink to="/atualizar">Atualizar</NavLink>
            </li>
            <li>
              <NavLink to="/deletar">Deletar</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar