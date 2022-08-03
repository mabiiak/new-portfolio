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

  @media screen and (max-width: 600px) {
    background-color: ${backgroundCards};
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
      height: 20%;

      a {
        display: flex;
        background-color: ${backgroundSide};
        padding: 2%;
        margin-right: 3%;
        margin-bottom: 5%;
        width: 50%;
        justify-content: center;
      }
    }
  }

  #name-project {
    font-size: 30px;
    margin-top: 5%;
    margin-bottom: 0;
  }

  /* @media screen and (max-width: 800px) {
    display: flex;
    width: 90%;
    height: 338px;
    margin: 5%;
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
        width: 90%;
      }

      #buttons {
        display: flex;
        height: 20%;

        a {
          display: flex;
          background-color: ${backgroundSide};
          padding: 2%;
          margin-right: 3%;
          margin-bottom: 5%;
          width: 50%;
          justify-content: center;
        }
      }
    }

    #name-project {
      font-size: 30px;
      margin-top: 5%;
      margin-bottom: 0;
    }
  } */

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 600px;
    margin: 5% 3%;
    width: 95%;
    background-color: ${background};
    
    #about-project {
      #buttons {
        position: relative;
        top: -90px;
      }
    }

    #name-project {
      margin-top: -10%;
    }
  }

  @media screen and (max-width: 500px) {
    height: 590px;

    #about-project {
      #buttons {
        position: relative;
        top: -60px;
      }
    }

    #name-project {
      margin-top: -20%;
    }
}

@media screen and (max-width: 450px) {
  height: 570px;

    #about-project {
      #buttons {
        position: relative;
        top: -15vh;
      }
    }

    #name-project {
      position: relative;
      top: -8vh;
    }
}
`;
