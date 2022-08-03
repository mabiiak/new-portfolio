import styled from 'styled-components';
import {
  background,
  backgroundSide,
  backgroundCards,
  colorText,
} from './Color';

export const ProjectsSection = styled.section`
  #title {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 120px;
  
    p {
      font-size: 60px;
      color: ${colorText};
    }

    img {
      width: 65%;
    }
  }
`;

export const CardProject = styled.div`
  display: flex;
  width: 60%;
  height: 338px;
  margin: 0 15% 3% 20%;
  background-color: ${backgroundCards};

  #about-project {
    display: flex;
    flex-direction: column;
    align-items: left;
    color: ${colorText};
    margin: 0 3%;

    #description {
      overflow:auto;
      height: 200px;
      word-wrap: break-word;
    }

    #description::-webkit-scrollbar {
      width: 10px;
    }
    
    #description::-webkit-scrollbar-thumb {
      background-color: ${background};
    }

    #buttons {
      display: flex;

      a {
        display: flex;
        background-color: ${backgroundSide};
        padding: 2%;
        margin-right: 3%;
        margin-bottom: 5%;
        width: 50%;
        justify-content: center;

        img {
          width: 40%;
        }
      }
    }
  }

  #name-project {
    font-size: 30px;
    margin-top: 5%;
    margin-bottom: 0;
  }
`;
