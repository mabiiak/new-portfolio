import styled from 'styled-components';
import {
  backgroundSide,
  colorText,
} from './Color';

export const SectionBody = styled.section`
  display: flex;
  height: 100vh;
  width: 99vw;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`
export const Description = styled.div`
  color: ${ colorText };
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 5vh 15vw 2rem 40vw;

  #title {
    font-size: 3rem;
    margin: 5px 0;
  }
  
  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin: 8vh 15vw;

    #title {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
      text-align: left;
    }
  }
`
export const SkillsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 15vw auto 40vw;
  position: relative;
  
  #title {
    color: ${backgroundSide};
    font-size: 2rem;
    margin: 5px 0;
  }
  
  #content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    #item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin: 2%;
      margin-left: 0;
      width: 10%;

      img {
        width: 90%;
      }
  
      p {
        color: ${backgroundSide};
        font-size: 1rem;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin: 2vh 15vw;

    #title {
      color: ${backgroundSide};
      font-size: 2rem;
      margin: 8px 0;
    }
    #content {
      justify-content: left;

      #item {
        margin: 2%;
        margin-left: 0;
        width: 25%;
      }
    }
  }
`
