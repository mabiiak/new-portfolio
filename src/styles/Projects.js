import styled from 'styled-components';
import {
  background,
  backgroundSide,
  backgroundCards,
  colorText,
} from './Color';

export const ProjectsSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  #title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 120px;
    width: 60%;
  
    p {
      font-size: 4vw;
      color: ${colorText};
    }

    img {
      width: 5vw;
    }
  }

  @media screen and (max-width: 500px) {
    #title {
    width: 60%;
  
    p {
      font-size: 6vw;
      color: ${colorText};
    }

    img {
      width: 7vw;
    }
  }
  }
`;

export const CardProject = styled.div`
  display: flex;
  width: 60%;
  height: 338px;
  min-height: 338px;
  min-width: 820px;
  margin-bottom: 3%;
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

  @media screen and (max-width: 900px) {
    min-width: 501px;
    width: 50%;
    flex-direction: column;
    height: 570px;
    margin-bottom: 5%;
    
    #about-project {
      height: 300px;
      position: relative; 
      top: -80px;

      #name-project {
        margin-top: 0;
      }

      #buttons {
        height: 30%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    min-width: 300px;
    height: 540px;
    
    #about-project {
      height: 375px;
      position: relative; 
      top: -80px;

      #name-project {
        margin-top: 0;
      }

      #buttons {
        height: 20%;
      }
    }
}
`;
