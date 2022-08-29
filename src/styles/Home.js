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
  margin: 14vh 20vw 10vh 45vw;

  #title {
    font-size: 60px;
    margin: 5px 0;
  }
  
  p {
    font-size: 20px;
    text-align: justify;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin: 8vh 15vw;

    p {
      text-align: left;
    }
  }
`
export const SkillsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 20vw auto 45vw;
  position: relative;
  
  #title {
    color: ${backgroundSide};
    font-size: 55px;
    margin: 5px 0;
  }
  
  #content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;

    #item {
      margin: 2%;
      margin-left: 0;
      width: 30%;

      img {
        width: 100%;
      }
  
      p {
        color: ${backgroundSide};
        font-size: 22px;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin: 5vh 15vw;

    #title {
      color: ${backgroundSide};
      font-size: 35px;
      margin: 8px 0;
    }
    #content {
      justify-content: space-between;

      #item {
        margin: 2%;
        margin-left: 0;
        width: 40%;
      }
    }
  }
`
