import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
`;

const WelcomeText = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const ProfessionalTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const ClientInfo = styled(motion.div)`
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
`;

const Shape = styled(motion.div)`
  position: absolute;
  opacity: 0.5;
`;

const shapes = [
  { color: '#FFA500', type: 'pyramid', top: '10%', left: '10%' },
  { color: '#4169E1', type: 'cylinder', top: '20%', right: '15%' },
  { color: '#98FF98', type: 'star', bottom: '15%', left: '20%' },
];

function Hero() {
  return (
    <HeroSection>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          style={{
            backgroundColor: shape.color,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
      <HeroContent>
        <WelcomeText
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Your Name!
        </WelcomeText>
        <ProfessionalTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Professional Title
        </ProfessionalTitle>
        <ClientInfo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          80+ Happy Clients
        </ClientInfo>
        <CTAButton
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
