import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.scss'
import React from 'react'
import CookiJar from './components/Projects/Project/CookiJar'
import ShopTheBlock from './components/Projects/Project/ShopTheBlock'
import SpiritualTeens from './components/Projects/Project/SpiritualTeens'
import PetalPushr from './components/Projects/Project/PetalPushr'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/cookijar" element={<CookiJar />} />
          <Route path="/projects/shoptheblock" element={<ShopTheBlock />} />
          <Route path="/projects/spiritualteens" element={<SpiritualTeens />} />
          <Route path="/projects/petalpushr" element={<PetalPushr />} />

          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>

  );
};

export default App;