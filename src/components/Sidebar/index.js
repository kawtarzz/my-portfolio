import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Nav className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={"logo"} alt="Logo" />

      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          Home
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          About
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          Portfolio
        </NavLink>
        <NavLink
          activeclassname="active"
          className="resume-link"
          target="_blank"
          to="https://docs.google.com/document/d/1iu6SipaWV5FiS2YmdkgSXqbMYMxa0MGpDZ2gzbY3lJI/edit?usp=sharing"
          onClick={() => setShowNav(false)}>
          Resume
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          Contact
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kawtara"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#ffffff"
              className="anchor-icon"
              style={{ fontSize: '1.7rem' }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kawtarzz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color='#ffffff'
              className="anchor-icon"
              style={{ fontSize: '1.7rem' }}
            />
          </a>
        </li>

      </ul>

    </Nav>
  )
}

export default Sidebar