import styled from 'styled-components';
import {
  backgroundSide,
  colorText,
} from './Color';

export const SectionBody = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  width: 100vw;
`
export const Description = styled.div`
  color: ${ colorText };
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  position: relative;
  left: 40vw;
  top: 7vh;

  #title {
    font-size: 60px;
    margin: 5px 0;
  }
  
  p {
    font-size: 20px;
    text-align: justify;
  }
`
export const SkillsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  position: relative;
  left: 40vw;
  
  #title {
    color: ${backgroundSide};
    font-size: 60px;
    margin: 5px 0;
  }
  
  #content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      width: 120px;
    }

    p {
      color: ${backgroundSide};
      font-size: 22px;
      text-align: center;
      text-transform: capitalize;
    }
  }

`