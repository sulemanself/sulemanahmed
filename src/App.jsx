import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import CallBooking from './components/CallBooking';

const AppContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="stack">
        <Stack />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <CallBooking />
      </Element>
    </AppContainer>
  );
}

export default App;
