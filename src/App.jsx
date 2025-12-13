import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Project from './sections/Project.jsx'
import Contact from './sections/Contact.jsx'
import Skills from './sections/Skills.jsx'
const App = () => {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />

      </>
  )
}

export default App