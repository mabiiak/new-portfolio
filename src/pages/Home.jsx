import React from 'react';
import { SectionBody } from '../styles/Home';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';

function Home() {
  return (
    <SectionBody>
      <Contact />
      <About />
    </SectionBody>
  );
}

export default Home;
