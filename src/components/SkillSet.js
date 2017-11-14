import React from 'react';
import styled from 'styled-components';
import imgHtml from '../img/HTML.png';
import imgCss from '../img/CSS.png';
import imgJs from '../img/JS.png';
import imgJq from '../img/JQ.png';
import imgReact from '../img/React.png';
import imgBootstrap from '../img/Bootstrap.png';

const Container = styled.section`
  /* dimensions */
  width: 100vw;
  height: 500px;

  /** background image - color */
  background: white;

  display: grid;
  grid-template-columns: 1fr 45% 45% 1fr;
  grid-template-rows: 37.5px 1fr .75fr .75fr .75fr .75fr .75fr .75fr 50px;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    height: 375px;
  }
  @media screen and (min-width: 720px) {  /* iPad and larger tablets */
    height: 550px;
  }
  @media screen and (min-width: 980px) { /* intermediate screens */
    height: 820px;

    grid-template-columns: 400px 1fr 1fr 400px;    
  }
`

const H1l = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #8F8E94;
  grid-area:2/2;
  justify-self: end;
  align-self: start;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    font-size: 2.75rem;
  }
`
const H1r = styled.h1`
font-size: 2rem;
  margin: 0;
  grid-area:2/3;
  align-self: start;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    font-size: 2.75rem;
  }
`
// thumbnails
const ThumbHtml = styled.div`
  background-image: url(${imgHtml});
  background-size: cover;
  grid-row: 3/5;
  grid-column: 2/3;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    
  }
  @media screen and (min-width: 980px) {
    &:hover {
      content: "HTML";
    }
  }

`
const ThumbCss = styled.div`
  background: url(${imgCss});
  background-size: cover;  
  grid-row: 3/5;
  grid-column: 3/4;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    
  }
`
const ThumbJs = styled.div`
  background: url(${imgJs});
  background-size: cover;  
  grid-row: 5/7;
  grid-column: 2/3;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    
  }
`
const ThumbJq = styled.div`
  background: url(${imgJq});
  background-size: cover;  
  grid-row: 5/7;
  grid-column: 3/4;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    
  }
`
const ThumbReact = styled.div`
  background: url(${imgReact});
  background-size: cover;  
  grid-row: 7/9;
  grid-column: 2/3;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    
  }
`
const ThumbBootstrap = styled.div`
  background: url(${imgBootstrap});
  background-size: cover;  
  grid-row: 7/9;
  grid-column: 3/4;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    
  }
`
const OverlayTitle = styled.h1`
  /* display: none; */
  text-align: left;
  font-weight: 100;
  font-size: 5rem;
  line-height: 5rem;
`

export default class SkillSet extends React.Component {
  render() {
    return(
      <Container>
        <H1l>Skill</H1l><H1r className="secondary">set</H1r>
        <ThumbHtml>
          <OverlayTitle>HTML</OverlayTitle>
        </ThumbHtml>
        <ThumbCss>
        <OverlayTitle>CSS</OverlayTitle>
        </ThumbCss>
        <ThumbJs>
        <OverlayTitle>JavaScript</OverlayTitle>
        </ThumbJs>
        <ThumbJq>
        <OverlayTitle>jQuery</OverlayTitle>
        </ThumbJq>
        <ThumbReact>
        <OverlayTitle>React</OverlayTitle>
        </ThumbReact>
        <ThumbBootstrap>
        <OverlayTitle>Bootstrap</OverlayTitle>
        </ThumbBootstrap>

      </Container>
    )
  }
}