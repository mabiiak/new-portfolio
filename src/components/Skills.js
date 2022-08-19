import React from 'react';
import { Description } from '../styles/Home';
import stacks from '../utils/infosStacks';

function Skills() {
  return (
    <Description>
      <p id='title'>Habilidades</p>
      {
        stacks.map((stack) => (
          <div key={ stack.name }>
            <img alt={ stack.name } src={ stack.image} />
            <p>{ stack.name }</p>
          </div>
        ))
      }
    </Description>
  )
}

export default Skills
