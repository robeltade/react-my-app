import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="blank"><FaLinkedin /></a>
        <a href="https://github.com" target="blank"><FaGithub /></a>
        <a href="https://twitter.com" target="blank"><FaTwitter /></a>

    </div>
  )
}

export default HeaderSocials