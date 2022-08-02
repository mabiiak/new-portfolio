import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/infos';
import repo from '../images/search-white.png';
import iconGitgub from '../images/icons-github-white.png';
import home from '../images/home.png';
import Carousel from '../components/Carousel';

function Projects() {
  return (
    <section>
      <h1>Projetos</h1>
      {
        projects.map((project) => (
          <div>
            <Carousel images={ project.images } />
            <h2>{ project.name }</h2>
            <p>{ project.description }</p>
            <div>
              <a href={ project.links.repo } rel='noreferrer'>
                <img src={ repo } alt='icon for repository in github' />
              </a>
              <a href={ project.links.view } rel='noreferrer'>
                <img src={ iconGitgub } alt='' />
              </a>
            </div>
          </div>
        ))
      }
      <Link to='/home'>
        <img src={ home } alt='icon home' />
      </Link>
    </section>
  )
}

export default Projects;
