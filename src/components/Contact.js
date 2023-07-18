import React from 'react';
import { Link } from 'react-router-dom';
import { Informations } from '../styles/Contact';
import picture from '../images/mabi-picture.jpeg';
import git from '../images/i-github-white.png';
import lin from '../images/i-linkedin.png';

function Contact() {
  return (
    <Informations>
      <img alt='Foto de Mabiane' src={picture} />
      <p id='name'> Mabiane Polniak </p>
      <p id='sub-title'> Desenvolvedora Full-Stack </p>
      <div id="icons">
        <a href='https://www.linkedin.com/in/mabianepolniak/' target="_blank" rel="noreferrer">
          <img alt='icone do linkedin' src={lin}  className="icons-img" />
        </a>
        <a id='git' href='https://github.com/mabiiak' target="_blank" rel="noreferrer">
          <img alt='icone do gitbub' src={git}  className="icons-img" />
        </a>
      </div>
      <Link id='button' to='/projects'>Projetos</Link>
    </Informations>
  )
}

export default Contact
