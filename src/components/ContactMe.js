import React from 'react'
import styled from 'styled-components'
import blogThumb from '../img/TomTheDev-thumb.png';
// import ContactForm from './blocks/ContactForm'

const Container = styled.section`
  /* dimensions */
  width: 100vw;
  height: 500px;

  /** background image - color */
  background: #646464;
  /* CSS grid layout props */
  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 50px .75fr 1.5fr 1.5fr 1.5fr 50px;
`
const H1l = styled.h1`
  font-size: 2rem;
  color: white;
  grid-area:2/2;
  justify-self: end;
  align-self: start;
`
const H1r = styled.h1`
  font-size: 2rem;
  grid-area:2/3;
  align-self: start;
`
const GithubIcon = styled.div`
  justify-self: center;
  align-self: center;

  font-size: 60px;
  padding: 10px;
  color: white;

  grid-column: 2/3;
  grid-row: 3/4;
`
const LinkedInIcon = styled.i`
  justify-self: center;
  align-self: center;

  font-size: 60px;
  padding: 10px;
  color: white;

  grid-column: 3/4;
  grid-row: 3/4;
`
const CodePenIcon = styled.i`
  justify-self: center;
  align-self: center;

  font-size: 60px;
  padding: 10px;
  color: white;

  grid-column: 2/3;
  grid-row: 4/5;
`
const TwitterIcon = styled.i`
  justify-self: center;
  align-self: center;

  font-size: 60px;
  padding: 10px;
  color: white;

  grid-column: 3/4;
  grid-row: 4/5;
`
const BlogButton = styled.div`
  text-align: center;
  justify-self: center;
  align-self: center;

  margin-top: 20px;
  width: 200px;
  height: 90px;

  border: solid .5px white;

  grid-column: 2/4;
  grid-row: 5/6;
`

export default class ContactMe extends React.Component {
  render() {
    return(
      <Container>
        <H1l>Contact</H1l><H1r className="secondary">me</H1r>
        <GithubIcon>
        <a href="https://github.com/thomasfaller">
          <i className="fa fa-github" aria-hidden="true" style={{color:"white"}}></i>
        </a>
        </GithubIcon>
        <LinkedInIcon>
        <a href="https://www.linkedin.com/in/tomthedev/">
          <i className="fa fa-linkedin" aria-hidden="true" style={{color:"white"}}></i>
        </a>
        </LinkedInIcon>
        <CodePenIcon>
        <a href="https://codepen.io/thomasfaller/">
          <i className="fa fa-codepen" aria-hidden="true" style={{color:"white"}}></i>
        </a>
        </CodePenIcon>
        <TwitterIcon>
        <a href="https://twitter.com/TomFrontEnd">
          <i className="fa fa-twitter" aria-hidden="true" style={{color:"white"}}></i>
        </a>
        </TwitterIcon>
        <BlogButton>
          <a href="https://www.tomthedev.com" target="_blank">
            <h1 style={{color:"white",margin: "16px"}}>Check out my blog!</h1>
          </a>
        </BlogButton>
      </Container>
    )
  }
}