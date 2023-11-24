import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { NavbarBrand } from 'react-bootstrap'


const Sidebar = () => {
  return (<>
    <div className="nav-bar">
      <NavbarBrand
        className="nav-link"
        href="/">
        <img
          src={Logo}
          className="logo"
          alt="Kawtar Azzouzi Logo"
        />
      </NavbarBrand>
      <NavLink
        className="nav-link"
        to="/about"
      >About</NavLink>
      <NavLink
        className="nav-link"
        to="/projects"
      >Projects</NavLink>
      <NavLink
        className="nav-link" to="/resume">Resume</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>

      <NavLink
        className="nav-link"
        to="https://www.linkedin.com/in/kawtara"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          icon={faLinkedin}
          color="#ffffff"
          className="anchor-icon"
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to="http://www.github.com/kawtarzz"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          color="#ffffff"
          className="anchor-icon"
        />
      </NavLink>
    </div >
  </>
  )
}

export default Sidebar