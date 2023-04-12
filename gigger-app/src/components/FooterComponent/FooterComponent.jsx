import React from 'react'
import { StyledFooter, StyledGiggerLogoFooter, StyledFooterDiv,StyledFooterDiv2 } from './FooterComponent.element'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'



const FooterComponent = () => {
  return (
    <StyledFooter>
        <StyledFooterDiv>
            <StyledGiggerLogoFooter>gigger</StyledGiggerLogoFooter>
            <span id="name">by Carlos Díaz.</span>
            <span id="copyright">All rights reserved</span>
        </StyledFooterDiv>
        <StyledFooterDiv2>
            <a alt="github-link" href="https://github.com/monsieurRobus"><FaGithub /></a>
            <a><FaEnvelope /></a>
            <a href="https://www.instagram.com/soymonsieur/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/carlosdp85/" alt="linked-in"><FaLinkedin /></a>
        </StyledFooterDiv2>
    </StyledFooter>
  )
}

export default FooterComponent