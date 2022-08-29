import React from 'react';
import { SkillsStyle } from '../styles/Home';
import stacks from '../utils/infosStacks';

function Skills() {
  return (
    <SkillsStyle>
      <p id='title'>Habilidades</p>
      <div id='content'>
        {
          stacks.map((stack) => (
            <div id='item' key={ stack.name }>
              <img alt={ stack.name } src={ stack.image} />
              <p>{ stack.name }</p>
            </div>
          ))
        }
      </div>
    </SkillsStyle>
  )
}

export default Skills
