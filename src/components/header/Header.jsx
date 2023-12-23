import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../asset/rob.jpg'

function Header() {
  return (
   <header>
    <div className="container header_container"> 
    <h5>Hello I'm</h5>
    <h1> Robel Tadesse</h1>
    <h5 className="text-light">Fullstack Developer</h5>
    <CTA />
    <HeaderSocials />
    </div>
    <div className='me'>
      <img src={Me} alt="me"  />
    </div>
    <a href="#contact" className='scroll_down'>scroll down</a>

   </header>
  )
}

export default Header