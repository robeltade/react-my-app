import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
//import Service from './components/services'
import Portifolio from './components/portifolio/Porifolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App=()=> {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    
    <Portifolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>

    </>
  );
};

export default App