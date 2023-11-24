import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import { Card } from 'react-bootstrap'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            About
          </h1>
          <Card>
            <Card.Body>
              <Card.Title as="h2">Full Stack Software Developer</Card.Title>
              <Card.Text align="LEFT">

                <h3>
                  Hello! I'm Kawtar. I'm a Nashville-based full-stack software/web developer.
                  With a background in design and animation coupled with an obsession for creating intuitive systems, I strive to deliver efficient solutions that are user-friendly and visually appealing.
                  <br />
                </h3>
                <h4>
                  I'm a recent graduate of Nashville Software School's Full-Stack Software Development bootcamp with a BFA from the School of the Art Institute of Chicago.
                  <br />
                  Having gained development skills with use of React, Javascript, HTML, CSS on the front end as well as C#, ADO.NET, SQL on the back end, my creativity and technical skills have allowed me to build applications with full CRUD functionally and visual branding.
                  <br></br>
                  I'm passionate about learning new technologies and am always looking for new challenges.
                  <br />
                  Have a project you'd like to discuss or a role you'd like to fill?
                  Or if you just want to say hello, I'd love to hear from you!
                </h4>
                <br />
                <Link to="mailto:kawtaryazzouzi@gmail.com"
                  className="flat-button">
                  <span>Let's talk!</span>
                </Link>
                <br />
                <br />
                <Card.Subtitle className="mb-2 text-muted">
                  <hr />
                  <h4>
                    Technologies
                  </h4>
                  <FontAwesomeIcon icon={faHtml5} size="2x" /> {''}
                  <FontAwesomeIcon icon={faCss3} size="2x" /> {''}
                  <FontAwesomeIcon icon={faJsSquare} size="2x" /> {''}
                  <FontAwesomeIcon icon={faReact} size="2x" /> {''}
                  <FontAwesomeIcon icon={faGitAlt} size="2x" />   {''}

                </Card.Subtitle>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div >
      <Loader type="pacman" />
    </>
  )
}

export default About