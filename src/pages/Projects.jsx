import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/infos';
import repo from '../midias/images/search-white.png';
import iconGitgub from '../midias/images/icons-github-white.png';
import home from '../midias/images/home.png';

function Projects() {
  return (
    <section>
      <h1>Projetos</h1>
      {
        projects.map((project) => (
          <div>
            <video width="320" height="240" controls>
              <source src={ project.video } type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
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
