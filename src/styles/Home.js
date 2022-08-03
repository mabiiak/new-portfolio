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
    flex-direction: column;
    justify-content: center;

    background-image: linear-gradient(-90deg, #EAEAEA 80%, #2C2C2C 0%);
  }
`

export const Informations = styled.div`
  align-items: center;
  background-color: ${backgroundCards};
  box-shadow: 3px 7px 10px rgb(0 , 1, 5, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
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
    height: 20vh;
    width: 80vw;

    img {
      width: 38%;
      margin: 3%;
    }

    div {
      text-align: center;
      flex-direction: column;
      align-items: center;
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
    text-align: right;
    align-items: flex-end;

    margin: 3% 0 0 20%;
    min-width: 250px;
    width: 40vw;
    height: 60vh;

    a {
    font-size: 30px;
    padding: 5%;
    text-align: center;
    text-decoration: none;
    width: 57vw;
  }
  }
`
