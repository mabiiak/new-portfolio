import React from 'react';
import { SectionBody } from '../styles/Home';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';

function Home() {
  return (
    <SectionBody>
      <Contact />
      <div>
        <About />
        <Skills />
      </div>
    </SectionBody>
  );
}

export default Home;
