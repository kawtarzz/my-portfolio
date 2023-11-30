import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-page">
          <h1>
            Hello! I'm Kawtar. I'm a Nashville-based full-stack software developer and designer.
          </h1>
          {/* insert image of self here */}
          <h3>
            With a background in design and animation coupled with an obsession for creating intuitive systems, I strive to deliver efficient solutions that are user-friendly and visually appealing.
            I'm a recent graduate of Nashville Software School's Full-Stack Software Development bootcamp with a BFA from the School of the Art Institute of Chicago.
          </h3>
          <p>
            Having gained development skills with use of React, Javascript, HTML, CSS on the front end as well as C#, ADO.NET, SQL on the back end, my creativity and technical skills have allowed me to build applications with full CRUD functionally and visual branding.
            I'm passionate about learning new technologies and am always looking for new challenges.
            Have a project you'd like to discuss or a role you'd like to fill?
            Or if you just want to say hello, I'd love to hear from you!
          </p>
          <Link to="mailto:kawtaryazzouzi@gmail.com"
            className="flat-button">
            <span>Let's talk!</span>
          </Link>
          <br />

          <h4>
            Technologies
          </h4>
          <FontAwesomeIcon icon={faHtml5} size="2x" /> {''}
          <FontAwesomeIcon icon={faCss3} size="2x" /> {''}
          <FontAwesomeIcon icon={faJsSquare} size="2x" /> {''}
          <FontAwesomeIcon icon={faReact} size="2x" /> {''}
          <FontAwesomeIcon icon={faGitAlt} size="2x" />   {''}
        </div>
      </div >

      <Loader type="pacman" />
    </>
  )
}

export default About