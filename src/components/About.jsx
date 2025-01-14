import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
`;

const AboutCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
`;

function About() {
  return (
    <AboutSection>
      <AboutCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I'm a passionate [Your Profession] with [X] years of experience in [Your Field]. 
          My expertise lies in [Your Key Skills], and I'm dedicated to creating 
          [What You Create/Do] that [Benefits/Results]. When I'm not working, 
          you can find me [Your Hobbies/Interests]. Let's collaborate and bring 
          your ideas to life!
        </AboutText>
      </AboutCard>
    </AboutSection>
  );
}

export default About;
