import React from 'react';
import styled from 'styled-components';
import fullstack from '../img/projects thumbnails/full-stack-thumb.png';
import gotquote from '../img/projects thumbnails/got-thumb.png';
import movieApp from '../img/projects thumbnails/movie-app.png';
import twitchapp from '../img/projects thumbnails/twichtv-app-gif.png';
import coffeeShop from '../img/projects thumbnails/cofeeShop-thumb.png';
import toDo from '../img/projects thumbnails/ToDo-thumb.png';
import adminDash from '../img/projects thumbnails/admin-thumb.png';

const Container = styled.section`
  /* dimensions */
  width: 100vw;
  height: 1979px;

  /** background image - color */
  background: white;
  /* CSS grid layout props */
  display: grid;
  grid-template-columns: 1fr 45% 45% 1fr;
  grid-template-rows: 50px 129px 259px 50px 259px 50px 259px 50px 259px 50px 259px 50px 259px 50px;
  /* grid-template-area:
    ". . . ."
    ". . . ."
    ". thumb1 thumb1 ."
    ". . . ."
    ". thumb2 thumb2 ."
    ". . . ."
    ". thumb3 thumb3 ."
    ". . . ."
    ". thumb4 thumb4 ."
    ". . . ."
    ". thumb5 thumb5 ."
    ". . . ."
    ". thumb6 thumb6 ."
    ". . . ."; */


  /* @media screen and (min-width: 670px) and (orientation: landscape) {
    width: 100%;
    grid-template-columns: 50px 1fr 30px 1fr 50px;
  }
  @media screen and (min-width: 720px) {
    height: 550px;
  }
  @media screen and (min-width: 980px) {
    height: 1080px;
    grid-template-columns: 300px 4fr 1fr 1fr 4fr 300px;

  }*/

  @media screen and (min-width: 1280px) {
    height: 1680px;
    grid-template-columns: 300px 4fr .5fr .5fr 4fr 300px;
  }

`
const H1l = styled.h1`
  margin: 0;
  font-size: 2rem;
  grid-area:2/2;
  justify-self: end;
  align-self: start;
  @media screen and (min-width: 1280px) {
    grid-area: 2/3;
    font-size: 2.75rem;
  }

`
const H1r = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #8F8E94;
  grid-area:2/3;
  align-self: start;
  @media screen and (min-width: 1280px) {
    grid-area: 2/4;
    font-size: 2.75rem;
  }
`
// Projects thumbnails

const FullStackThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${fullstack});
  background-size: cover;

  grid-row: 3/4;
  grid-column: 2/4;

  @media screen and (min-width: 1280px) {
    grid-column: 2/3;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }  
  
`
const GotquoteThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: url(${gotquote});
  background-size: cover;
  
  grid-row: 5/6;
  grid-column: 2/4;

  @media screen and (min-width: 1280px) {
    grid-row: 3/4;
    grid-column: 5/6;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
`
const MovieAppThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${movieApp});
  background-size: cover;
  grid-row: 7/8;
  grid-column: 2/4;

  @media screen and (min-width: 1280px) {
    grid-row: 5/6;
    grid-column: 2/3;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);  
  }
`
const TwitchAppThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${twitchapp});
  background-size: cover;
  grid-row: 5/6;
  grid-column: 2/4;

  @media screen and (min-width: 1280px) {
    grid-column: 5/6;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
`
const CoffeeShopThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${coffeeShop});
  background-size: cover;
  grid-row: 11/12;
  grid-column: 2/4;

  @media screen and (min-width: 1280px) {
    grid-row: 7/8;
    grid-column: 2/3;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }

`
const ToDoThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${toDo});
  background-size: cover;
  grid-row: 13/14;
  grid-column: 2/4;

  @media screen and (min-width: 1280px) {
    grid-row: 7/8;
    grid-column: 5/6;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
`
const AdminDashThumb = styled.div`
display: flex;
justify-content: center;
align-items: center;

background: url(${adminDash});
background-size: cover;
grid-row: 13/14;
grid-column: 2/4;

@media screen and (min-width: 1280px) {
  grid-row: 9/10;
  grid-column: 2/3;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}
`

const ThumbTitle = styled.h3`
  display: inline-block;
  padding: 20px;
  text-align: center;
  line-height: 30px;
  font-size: 1.4rem;
  color: black;
  background: rgba(255,255,255,.6);
  text-decoration: none;
`

export default class Work extends React.Component {
  render() {
    return(
      <Container>
        <H1l className="secondary">W</H1l><H1r>ork</H1r>
        <FullStackThumb>
          <a href="https://thomasfaller.github.io/full-stack-conf/" target="_blank">
            <ThumbTitle>FULL STACK CONFERENCE LANDING PAGE</ThumbTitle>
          </a>
        </FullStackThumb>
        <GotquoteThumb>
          <a href="https://thomasfaller.github.io/GoT-QuoteMachine/" target="_blank">  
            <ThumbTitle>GAME OF THRONES QUOTE GENERATOR</ThumbTitle>
          </a>
        </GotquoteThumb>
        <MovieAppThumb>
          <a href="https://thomasfaller.github.io/Movie-App/" target="_blank">
            <ThumbTitle>MOVIE SEARCH WEBAPP</ThumbTitle> 
          </a>
        </MovieAppThumb>
        <TwitchAppThumb>
          <a href="https://thomasfaller.github.io/TwitchTv-App/" target="_blank">
            <ThumbTitle>TWICHTV WEBAPP</ThumbTitle>
          </a>
        </TwitchAppThumb>
        <CoffeeShopThumb>
          <a href="https://thomasfaller.github.io/CoffeeShop/" target="_blank">
            <ThumbTitle>BISTRO COFFEE LANDING PAGE</ThumbTitle>
          </a>
        </CoffeeShopThumb>
        <ToDoThumb>
          <a href="https://thomasfaller.github.io/BonusTODO/" target="_blank">
            <ThumbTitle>TO DO LIST - WEBAPP</ThumbTitle>
          </a>
        </ToDoThumb>
        <AdminDashThumb>
          <a href="https://thomasfaller.github.io/AdminDashboard/" target="_blank">
            <ThumbTitle>ADMIN DASHBOARD</ThumbTitle>
          </a>
        </AdminDashThumb>
      </Container>
    )
  }
}