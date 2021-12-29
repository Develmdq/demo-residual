import { createGlobalStyle } from "styled-components";
import { ReactComponent as LogoBand } from "../assets/svg/logo_band.svg";
import Archicoco from "../assets/fonts/Archicoco.ttf";
import styled from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "Archicoco";
  src: local("Archicoco"), url(${Archicoco}) format('truetype');
};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 75vh 25vh;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 20vh 55vh 25vh;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 25vh 10vh 27vh 30vh 8vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 2/1/3/2;

  @media (max-width: 1024px) {
    grid-area: 1/1/2/3;
  }

  @media (max-width: 576px) {
    grid-area: 1/1/2/4;
  }
`;

export const LogoDemoResidual = styled(LogoBand)`
  width: 90%;
  height: 90%;

  @media (max-width: 1024px) {
    width: 110%;
    height: 90%;
  }

  @media (max-width: 576px) {
    width: 80%;
    height: 80%;
  }
  
`;

export const MusicalNotes = styled.div`
  position: fixed;
  top: 68%;
  left: 1%;
  width: 20%;
  height: 15%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    top: 68%;
    left: 1%;
  }

  @media (max-width: 576px) {
    top: -10%;
    left: 50%;
  }
`;

export const Frase = styled.p`
  align-self: center;
  color: #b8860b;
  font-family: "Archicoco";
  font-size: 2.5vmin;
  text-align: center;
  white-space: pre;
  grid-area: 2/2/3/3;

  @media (max-width: 1024px) {
    grid-area: 1/3/2/5;
    font-size: 3.5vmin;
  }

  @media (max-width: 576px) {
    grid-area: 2/1/3/4;
    font-size: 4vmin;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  grid-area: 2/3/3/5;
  align-items: center;
  text-align: right;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-out;

  @media (max-width: 1024px) {
    grid-area: 3/1/4/3;
    text-align: center;
  }

  @media (max-width: 576px) {
    grid-area: 5/1/6/4;
    text-align: center;
  }
`;

export const BtnSocial = styled.a`
  svg {
    fill: #7c7c7c;
    width: 60%;
    height: 60%;

    :active {
      opacity: 0.7;
      transform: scale(1.2);
      fill: #b8860b;
      .icon-face {
        fill: #3b5998;
        transform: scale(1.3);
      }
      .icon-you {
        fill: #c4302b;
        transform: scale(1.3);
      }
      .icon-inst {
        fill: #fff;
        transform: scale(1.3);
      }
    }
    :hover {
      transform: scale(0.9);
      fill: #fff9;
    }
  }
  @media (max-width: 1024px) {
    width: 70%;
    height: 60%;
  }

  @media (max-width: 576px) {
    width: 130%;
    height: 130%;
  }
`;

export const CarouselContainer = styled.div`
  grid-area: 2/5/3/7;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  transform: translate(150px, -80px);
  width: 50%;
  object-fit: fill;

  :hover {
    width: 80%;
    transition-duration: 0.5s;
    transform: translate(70px, -330px);
  }

  @media (max-width: 1024px) {
    grid-area: 3/3/4/5;
  }

  @media (max-width: 576px) {
    grid-area: 4/1/5/4;
    width: 50%;
    transform: translate(120px, 30px);
    :hover {
      width: 80%;
      transition-duration: 0.5s;
      transform: translate(60px, -100px);
    }
  }
`;

export const OtroContainer = styled.div`
  /* margin-left: 20%; */

  /* @media (max-width: 1024px) {
    margin-left: 20%;
  }

  @media (max-width: 576px) {
    margin-left: 40%;
    text-align: center;

    :hover {
      width: 220%;
      transform: translate(-0px, -1px);
    }
  } */
`;
