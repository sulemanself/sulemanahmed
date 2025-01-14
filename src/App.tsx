import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import CallBooking from './components/CallBooking';
import { SparklesPreview, SparklesPreviewDark, SparklesPreviewColorful } from './components/ui/sparkles.demo';
import { StackedCircularFooter } from './components/ui/stacked-circular-footer';

function App() {
  return (
    <div className="min-h-screen">
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
      <SparklesPreview />
      <SparklesPreviewDark />
      <SparklesPreviewColorful />
      <StackedCircularFooter />
    </div>
  );
}

export default App;
