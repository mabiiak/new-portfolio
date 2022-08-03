import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/infos';
import repo from '../images/search-white.png';
import iconGitgub from '../images/icons-github-white.png';
import home from '../images/home-white.png';
import Carousel from '../components/Carousel';
import { ProjectsSection, CardProject } from '../styles/Projects';

function Projects() {
  return (
    <ProjectsSection>
      <div id='title'>
        <Link to='/home'>
          <img src={ home } alt='icon home' />
        </Link>
        <p>Projetos</p>
      </div>
      {
        projects.map((project) => (
          <CardProject>
            <Carousel images={ project.images } />
            <div id='about-project'>
              <p id='name-project'>{ project.name }</p>
              <p id='description'>{ project.description }</p>
              <div id='buttons'>
                <a href={ project.links.repo } target="_blank" rel='noreferrer'>
                  <img src={ repo } alt='icon for repository in github' />
                </a>
                <a href={ project.links.view } target="_blank" rel='noreferrer'>
                  <img src={ iconGitgub } alt='' />
                </a>
              </div>
            </div>
          </CardProject>
        ))
      }
     
    </ProjectsSection>
  )
}

export default Projects;
