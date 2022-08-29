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
    width: 60%;
  }

  p {
    color: ${ background };
  }

  #name {
    font-size: 2.3vw;
    margin: 5vh auto 0vh auto;
  }

  #sub-title {
    font-size: 1.7vw;
    margin-bottom: 3vh;
    text-align: center;
    width: 50%;
  }

  #icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    margin-bottom: 2vh;
  }

  .icons-img {
    width: 65%;
  }

  #button {
    background-color: ${backgroundCards};
    color: ${backgroundSide};
    font-size: 180%;
    padding: 5%;
    text-align: center;
    text-decoration: none;
    width: 60%;
    box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 600px) {
    background-image: linear-gradient(180deg, #2C2C2C 40vw, rgb(0, 0, 0, 0) 0);
    background-repeat: repeat;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    min-width: 100%;
    padding-top: 5vh;
    position: static;
    width: 105%;
    
    img {
      margin-top: 10vh;
      width: 40%;
    }

    #name {
      font-size: 6vw;
      margin: 2vh auto 0vh auto;
    }

    #sub-title {
      font-size: 4vw;
      width: 30%;
      text-align: center;
    }

    #icons {
      align-items: center;
    }

    .icons-img {
      margin: 0;
      width: 50%;
      margin-left: 5vw;
    }

    #button {
      height: 60px;
      width: 100%;
      font-size: 250%;
      position: -webkit-sticky;
      position: sticky;
    }
  }
`;