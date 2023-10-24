import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <div className="nav-bar">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="logo"
            alt="Web Developer Kawtar Azzouzi Logo"

          />{' '}
        </Navbar.Brand>
        <NavLink
          className="portfolio-link"
          to="/portfolio"
        >Portfolio</NavLink>
        <NavLink
          className="resume-link" to="/resume">Resume</NavLink>
        <NavLink className="contact-link" to="/contact">Contact</NavLink>

        <NavLink
          className="linkedin-link"
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
          className="linkedin-link"
          to="http://www.github.com/kawtarzz"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            color="#ffffff"
            className="anchor-icon"
          />
        </NavLink>
      </div>
    </Navbar >
  )
}

export default Sidebar