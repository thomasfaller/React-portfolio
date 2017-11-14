import React from 'react';
import styled from 'styled-components';
import banner from '../img/giphy.gif';

const Container = styled.header`
  position: relative;
  /* dimensions */
  width: 100vw;
  height: 500px;

  @media screen and (min-width: 390px) and (orientation: landscape) { /* iPhone 6 in Landscape mode */
    height: 375px;
  }
  @media screen and (min-width: 720px) {  /* iPad and larger tablets */
    height: 550px;
  }
  @media screen and (min-width: 980px) { /* intermediate screens */
    height: 90vh;
  }
  @media screen and (min-width: 1280px) { /* larger screens */
    height: 100vh;
  }



  /** background image - color */
  background-image: url('${banner}');
  background-size: cover;
  background-repeat: no-repeat;
  /* CSS grid layout props */
  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 150px 1fr 1fr 150px;
  grid-template-areas:
    ". . . ."
    ". top-left top-right ."
    ". bottom-left bottom-right ."
    ". . . .";

    & > h1, h2 {
      font-weight: 200;
      margin: 0;

      @media screen and (min-width: 720px) { /* iPad and larger tablets */
        font-weight: 200;
        font-size: 2.25rem;
      }
      @media screen and (min-width: 980px) {
        font-size: 2.5rem;
      }
      @media screen and (min-width: 1280px) {
        font-size: 3.25rem;
      }
    }
`
const Overlay = styled.div`
  background: rgba(255,255,255,.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media screen and (min-width: 980px) {
    background: rgba(255,255,255,.9);
  }
`
const H1 = styled.h1`
  font-size: 2.225rem;
  z-index: 3;
`
const H2 = styled.h2`
  font-size: 1.825rem;
  z-index: 4;
`

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <Container>
          <H1 className="tl secondary animated fadeInLeft">Thomas</H1>
          <H1 className="tr animated fadeInRight">Faller</H1>
          <H2 className="bl animated fadeInLeft">Front end</H2>
          <H2 className="br secondary animated fadeInRight">developer</H2>

          <Overlay></Overlay>
        </Container>
      </div>
    )
  }
}