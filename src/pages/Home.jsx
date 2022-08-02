import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../images/mabi-picture.jpeg';
import iconGit from '../images/icons-github.png';
import iconLinkedin from '../images/icons-linkedin.png';

function Home() {
  return (
    <>
      <div>
        <img alt='Foto de Mabiane' src={picture} width="100px" />
        <h3>
          Mabiane Polniak
        </h3>
        <h4>
          Desenvolvedora Front-End
        </h4>
        <a href='https://github.com/mabiiak' target="_blank" rel="noreferrer">
          <img alt='icone do gitbub' src={iconGit} width="100px" />
        </a>
        <a href='https://www.linkedin.com/in/mabianepolniak/' target="_blank" rel="noreferrer">
          <img alt='icone do linkedin' src={iconLinkedin} width="100px" />
        </a>
      </div>
      <div>
        <h1>Olá</h1>
        <p>
          Meu nome é Mabiane, moro em Curitiba. 
          Já trabalhei com atendimento ao cliente e vendas, e com isso descobri que eu gosto de ajudar outras pessoas. <br/><br/>

          Atualmente sou Desenvolvedora Fron-End e estudo Desenvolvimento Web na Trybe.
        </p>
        <Link to='/projects'>Projetos</Link>
      </div>
    </>
  );
}

export default Home;
