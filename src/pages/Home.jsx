import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBody, Informations, Description } from '../styles/Home';

import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
  return (
    <SectionBody>
      <Contact />
      <Description>
        <p id='title'>Olá,</p>
        <p>
          Sou uma Desenvolvedora Full-Stack, apaixonada pelo front.
          Atualmente estudo Desenvolvimento Web na Trybe, onde eu tive meu primeiro contato com tecnologia e pude aplicar meus conhecimentos em projetos práticos.
          <br />
          <br />
          Antes de me encontrar como desenvolvedora, trabalhei com vendas em um call center, telefonista em uma agencia bancaria, e também como vendedora em uma loja de enxovais, e com isso pude melhorar minha comunicação e descobrir a satisfação de ajudar alguém com meu trabalho.
        </p>
        <Link to='/projects'>Projetos</Link>
      </Description>
    </SectionBody>
  );
}

export default Home;
