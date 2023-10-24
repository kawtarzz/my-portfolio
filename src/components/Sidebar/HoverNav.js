import React, { useState } from 'react';



const HoverNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) => {
    switch (e.target.id) {
      case '1':
        setIsHovered(1);
        break;
      case '2':
        setIsHovered(2);
        break;
      case '3':
        setIsHovered(3);
        break;
      case '4':
        setIsHovered(4);
        break;
      default:
        setIsHovered(false);
    }
  };


  return (
    <div className="App">
      <div className="nav">
        <div className="nav-left">
          <h1>Hello Hover Nav</h1>
        </div>
        <div className="nav-right">
          <a
            href="#about"
            id="1"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={isHovered === 'about' ? 'hovered' : ''}
          >
            About
          </a>
          <a
            href="#portfolio"
            id="2"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={isHovered === 'portfolio' ? 'hovered' : ''}
          >
            Portfolio
          </a>
          <a
            href="#resume"
            id="3"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={isHovered === 'resume' ? 'hovered' : ''}
          >
            Resume
          </a>
          <a
            href="#contact"
            id="4"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={isHovered === 'contact' ? 'hovered' : ''}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="content">
        <div className="content-left">
          <div className="content-left-inner">
            <h1>Hi, I'm Alex</h1>
            <h2>Full Stack Developer</h2>
            <p>
              I'm a full stack developer based in New York City. I have a
              passion for coding and love to create new things. I'm always
              looking for new opportunities to learn and grow as a developer.
            </p>
          </div>
        </div>
        <div className="content-right">
          <div className="content-right-inner">
            <img src="" alt="profile" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HoverNav;