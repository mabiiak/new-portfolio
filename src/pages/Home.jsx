import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBody, Informations, Description } from '../styles/Home';
import picture from '../images/mabi-picture.jpeg';
import iconGit from '../images/icons-github.png';
import iconLinkedin from '../images/icons-linkedin.png';
import js from '../images/stacks/icon-javascript.png'
import py from '../images/stacks/icon-python.png'
import sql from '../images/stacks/icon-sql.png'
import css from '../images/stacks/icons-css.png'
import nd from '../images/stacks/icons-node.png'
import rct from '../images/stacks/icons-react.png'
import tp from '../images/stacks/icons-typescript.png'

function Home() {
  return (
    <SectionBody>
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
      <Description>
        <p id='title'>Olá,</p>
        <p>
          Sou uma Desenvolvedora Full-Stack, apaixonada pelo front.
          Atualmente estudo Desenvolvimento Web na Trybe, onde eu tive meu primeiro contato com tecnologia e pude aplicar meus conhecimentos em projetos práticos.
          <br /><br />
          Antes de me encontrar como desenvolvedora, trabalhei com vendas em um call center, telefonista em uma agencia bancaria, e também como vendedora em uma loja de enxovais, e com isso pude melhorar minha comunicação e descobrir a satisfação de ajudar alguém com meu trabalho.
        </p>
        <Link to='/projects'>Projetos</Link>
      </Description>
    </SectionBody>
  );
}

export default Home;
