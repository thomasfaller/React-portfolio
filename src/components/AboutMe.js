import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal'; 
import thumbnail from '../img/face.png';
import banner from '../img/about-me-banner.png';

const Container = styled.section`
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
    height: 820px;
  }

  /** background image - color */
  background: #646464;
  /* CSS grid layout props */
  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 37.5px .75fr 1.25fr 1fr 1fr 50px;

  @media screen and (max-width: 670px) and (orientation: landscape) {
    grid-template-columns: 50px 1fr 2fr 2fr 50px;
    grid-template-rows: 50px .75fr 1.25fr 1fr 1fr 50px;
  }

  @media screen and (min-width: 980px) {
    grid-template-columns: 400px .9fr 1fr 1fr .9fr 400px;
    grid-template-rows: 100px 1fr 1.75fr 1.75fr 1.75fr 1fr 100px;   

    background: url(${banner}); 
  }


`
const H1l = styled.h1`
  margin: 0;

  font-size: 2rem;
  color: white;
  grid-area: 2/2;
  justify-self: end;
  align-self: start;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    font-size: 2.75rem;
  }
  @media screen and (min-width: 980px) {
    grid-area:1/3;
    align-self: end;
  }

`
const H1r = styled.h1`
  margin: 0;

  font-size: 2rem;
  grid-area: 2/3;
  align-self: start;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    font-size: 2.75rem;
  }
  @media screen and (min-width: 980px) {
    grid-area:1/4;
    align-self: end;
  }

`
const Thumb = styled.img`
  width: 115px;
  height: 115px;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 4;
  grid-row: 3 / 4;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    justify-self: center;
  }

  @media screen and (min-width: 980px) {
    width: 129px;
    height: 129px;

    grid-column: 5 / 6;
    grid-row: 2 / 4;
  }
`
const P1 = styled.p`   /* 1st paragraph "after a career in..."*/
  text-align: center;
  color: white;
  grid-column: 2 / 4;
  grid-row: 4 / 5;

  @media screen and (min-width: 670px) and (orientation: landscape) {
    text-align: left;
    grid-row: 3 / 6;

    
  }
  @media screen and (min-width: 980px) {
    font-size: 24px;
    font-weight: 100;

    grid-column: 2 / 5;
    grid-row: 3 / 4;
  }

`
const P2 = styled.p` /* second paragraph on mobile / last on desktop */
  text-align: center;
  color: white;
  grid-column: 2 / 4;
  grid-row: 5 / 6;

@media screen and (min-width: 670px) and (orientation: landscape) {
  font-size: 1.25rem;

  text-align: right;
  grid-column: 4 / 5;
  grid-row: 4 / 5;
}
@media screen and (min-width: 980px) {
  font-size: 24px;
  font-weight: 100;

  grid-column: 3 / 6;
  grid-row: 6 / 7;
}

`
const P3 = styled.p`
  display: none;

  text-align: center;
  color: white;
  
  @media screen and (min-width: 980px) {
    display: initial;
    text-align: right;

    font-size: 24px;
    font-weight: 100;

    grid-column: 3 / 6;
    grid-row: 4 / 5;
  }

`
const P4 = styled.p`
  display: none;

  text-align: center;
  color: white;

  @media screen and (min-width: 980px) {
    display: initial;
    text-align: left;

    font-size: 24px;
    font-weight: 100;  

    grid-column: 2 / 5;
    grid-row: 5 / 6;
  }
`





export default class AboutMe extends React.Component {
  render() {
    return(
      <Container>
        <H1l>About</H1l><H1r className="secondary">me</H1r>
        <Thumb src={thumbnail}/>
        <P1>After a career as a Trainer and Coach , I reconnected with my love of programming and I'm embracing a new path as a Front-End Developer.</P1>
        <P2>I believe that nothing should come between a powerful content and a passionate user.</P2>
        <P3>I am a determined aspiring programmer, passionate about learning new skills and crafting meaningful user experiences with clean, efficient and maintainable code. I’m familiar with the latest responsive technologies and collaborative work on Github. I bring my experience into my work and design.</P3>
        <P4>Polished user experiences, neat interfaces and meaningful backstories are my drivers when diving into a new projects. I'm literal in HTML 5 and CSS 3, proficient in JavaScript and very enthusiastic when it comes to React.JS.</P4>
      </Container>
    )
  }
}