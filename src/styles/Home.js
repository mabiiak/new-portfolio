import styled from 'styled-components';
import {
  background,
  backgroundSide,
  backgroundCards,
  colorText,
} from './Color';

export const SectionBody = styled.section`
  align-items: center;
  background-image: linear-gradient(-90deg, ${background} 65%, ${backgroundSide} 0%);
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  `

export const Informations = styled.div`
  align-items: center;
  background-color: ${backgroundCards};
  box-shadow: 5px 10px 7px rgb(0 , 1, 5, 0.5);
  display: flex;
  flex-direction: column;
  height: 55%;
  margin: 5% 1% 5% 5%;
  padding: 3%;
  width: 12%;

  img {
    border-radius: 50%;
    width: 100%;
  }

  div {
    text-align: center;

    p {
      color: ${ colorText };
      font-size: 21px;
    }

    #sub-title {
      font-size: 15px;
      margin-bottom: 15%;
    }
  }

  #icons {
    display: flex;
    flex-direction: row;
    width: 80%;
  }
  
  #git {
    width: 100%;
  }
`;

export const Description = styled.div`
  color: ${ colorText };
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
  padding: 3%;
  width: 23%;

  #title {
    font-size: 60px;
    margin: -5%;
    margin-left: 0;
  }
  
  p {
    font-size: 20px;
    text-align: justify;
  }

  a {
    background-color: ${backgroundSide};
    color: white;
    font-size: 30px;
    margin-top: 2%;
    padding: 5%;
    text-align: center;
    text-decoration: none;
  }
`
