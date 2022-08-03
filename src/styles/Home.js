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
    text-align: center;

    p {
      color: ${ colorText };
      font-size: 25px;
      margin: 0;
    }

    #sub-title {
      font-size: 15px;
      margin-bottom: 15%;
    }
  }

  #icons {
    display: flex;
    justify-content: center;
    width: 60%;
  }

  .icons-img {
    width: 80%;
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
`
