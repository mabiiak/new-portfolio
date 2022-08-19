import React from 'react';
import { Informations } from '../styles/Home';
import picture from '../images/mabi-picture.jpeg';
import iconGit from '../images/icons-github.png';
import iconLinkedin from '../images/icons-linkedin.png';

function Contact() {
  return (
    <Informations>
      <img alt='Foto de Mabiane' src={picture} />
      <div>
        <p> Mabiane Polniak </p>
        <p id='sub-title'> Desenvolvedora Full-Stack </p>
        <div id="icons">
          <a id='git' href='https://github.com/mabiiak' target="_blank" rel="noreferrer">
            <img alt='icone do gitbub' src={iconGit}  className="icons-img" />
          </a>
          <a href='https://www.linkedin.com/in/mabianepolniak/' target="_blank" rel="noreferrer">
            <img alt='icone do linkedin' src={iconLinkedin}  className="icons-img" />
          </a>
        </div>
      </div>
    </Informations>
  )
}

export default Contact
