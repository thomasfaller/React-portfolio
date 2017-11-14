import React, { Component } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SkillSet from './components/SkillSet';
import Work from './components/Work';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <SkillSet />
        <Work />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
