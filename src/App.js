import React from 'react'
import Navbar from './components/common/Navbar'
import About from './components/common/features/About Us';
import Skills from './components/common/features/Skills';
import Project from './components/common/features/Projects';
import Contact from './components/common/features/Contact Us';
import Footer from './components/common/Footer';
import './App.css';

const App = () => {
  return (
    <>
     <Navbar />
     <About />
     <Skills />
     <Project />
     <Contact />
     <Footer/>
    </>
  )
}

export default App

