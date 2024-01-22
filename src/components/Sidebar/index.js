import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/logo.svg'
import DarkMode from '../DarkMode/DarkMode'

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <a href="/">
          <img src={Logo} className="nav-logo logo" alt="Kawtar Azzouzi Logo" />
        </a>
        <div className="nav-links">
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/projects">
            Projects
          </a>

          <a className="nav-link" href="/resume">
            Resume
          </a>
          <a className="nav-link" href="/contact">
            Contact
          </a>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/kawtar-azzouzi/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a
              href="https://www.github.com/kawtarzz"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </div>
          <DarkMode />
        </div>
      </div>
    </>
  )
}

export default Navbar
