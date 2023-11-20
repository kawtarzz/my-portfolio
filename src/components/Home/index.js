import { useState, useEffect } from "react"
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import './index.scss'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return (
      <Loader type="ball-pulse" active={true} />
    )
  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <br></br>
          <h1>
            Kawtar Azzouzi is a full-stack developer & designer based in Nashville, Tennessee.
          </h1>
          <h2>
            Blending creativity and technical know-how to make intuitive user experiences that are visually not boring.
          </h2>
          <br />
          <Link to="/contact"
            className="flat-button">
            <span>Get in touch</span>
          </Link>
          <Loader type="ball-pulse" active={true} />
        </div>
      </div>
    </>
  )
}

export default Home;
