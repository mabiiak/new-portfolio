import styled from 'styled-components';
import {
  backgroundSide,
  backgroundCards,
  colorText,
} from './Color';

export const SectionBody = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  @media screen and (max-width: 600px) {
    background-image: linear-gradient(-90deg, #EAEAEA 80%, #2C2C2C 0%);
    flex-direction: column;
  }
`

export const Informations = styled.div`
  align-items: center;
  background-color: ${backgroundCards};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  min-width: 120px;
  width: 20vw;

  img {
    border-radius: 50%;
    width: 70%;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    p {
      color: ${ colorText };
      font-size: 25px;
      margin: 0;
    }

    #sub-title {
      font-size: 15px;
      margin-bottom: 15%;
    }

    #icons {
      display: flex;
      flex-direction: row;
      width: 60%;
    }
  
    .icons-img {
      width: 80%;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;
    height: 25vh;
    width: 90vw;

    img {
      width: 38%;
      margin: 3%;
    }

    div {
      flex-direction: column;

      p {
        font-size: 20px;
      }

      #sub-title {
        font-size: 12px;
        margin-bottom: 5%;
      }

      #icons {
        display: flex;
        flex-direction: row;
        width: 45%;
      }
    }
  }
`;

export const Description = styled.div`
  color: ${ colorText };
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  margin: 3%;
  min-width: 150px;
  width: 35vw;

  #title {
    font-size: 60px;
    margin: 5px 0;
  }
  
  p {
    font-size: 20px;
    text-align: justify;
  }

  a {
    background-color: ${backgroundSide};
    color: white;
    font-size: 30px;
    padding: 3%;
    text-align: center;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: flex-end;
    margin: 5vh 0 0 20%;
    min-width: 250px;
    width: 45vw;
    height: 60vh;

    #title {
    font-size: 38px;
    margin: 0;
  }

    p {
      text-align: justify;
      width: 70vw;
      font-size: 18px;
    }

    a {
      font-size: 30px;
      padding: 5%;
      text-align: center;
      text-decoration: none;
      width: 60vw;
    }
  }
`
