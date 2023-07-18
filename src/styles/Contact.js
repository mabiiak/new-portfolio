import styled from 'styled-components';
import {
  background,
  backgroundSide,
  backgroundCards,
} from './Color';

export const Informations = styled.div`
  align-items: center;
  background-color: ${backgroundSide};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 27vw;
  position: fixed;

  img {
    border-radius: 50%;
    width: 40%;
  }

  p {
    color: ${ background };
  }

  #name {
    font-size: 2rem;
    margin: 5vh auto 0vh auto;
  }

  #sub-title {
    font-size: 1.2rem;
    margin-bottom: 3vh;
    text-align: center;
    width: 40%;
  }

  #icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 25%;
    margin-bottom: 2vh;
  }

  .icons-img {
    width: 65%;
  }

  #button {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 1.3rem;
    padding: 5%;
    font-size: 1.3rem;
    box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5);
    
    text-decoration: none;
    border-radius: 8px;
    background-color: ${backgroundCards};
    color: ${backgroundSide};
  }

  @media screen and (max-width: 600px) {
    background-image: linear-gradient(180deg, #2C2C2C 40vw, rgb(0, 0, 0, 0) 0);
    background-repeat: repeat;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    min-width: 100%;
    padding-top: 5vh;
    position: relative;
    width: 105%;
    
    img {
      margin-top: 10vh;
      width: 30%;
    }

    #name {
      font-size: 1.2rem;
      margin: 2vh auto 0vh auto;
    }

    #sub-title {
      font-size: 0.8rem;
      width: 30%;
      text-align: center;
    }

    #icons > a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icons-img {
      margin: 0;
      width: 50%;
    }

    #button {
      width: 70%;
      position: -webkit-sticky;
      position: sticky;
    }
  }
`;