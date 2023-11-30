import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.scss'
import React from 'react'
import CookiJar from './components/Projects/Project/CookiJar'
import ShopTheBlock from './components/Projects/Project/ShopTheBlock'

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
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>

  );
};

export default App;