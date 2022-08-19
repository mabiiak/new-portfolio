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
    font-size: 34px;
    margin: 5vh auto 0vh auto;
  }

  #sub-title {
    font-size: 25px;
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
    font-size: 30px;
    padding: 5%;
    text-align: center;
    text-decoration: none;
    width: 60%;
    box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5);
  }
`;