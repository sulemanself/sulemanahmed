import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StackSection = styled.section`
  padding: 5rem 0;
`;

const StackTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const StackCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StackIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
`;

const StackName = styled.h3`
  font-size: 1.2rem;
`;

const stackItems = [
  { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
  { name: 'Notion', icon: 'https://www.vectorlogo.zone/logos/notion/notion-icon.svg' },
  // Add more tools as needed
];

function Stack() {
  return (
    <StackSection>
      <StackTitle>My Stack</StackTitle>
      <StackGrid>
        {stackItems.map((item, index) => (
          <StackCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <StackIcon src={item.icon} alt={item.name} />
            <StackName>{item.name}</StackName>
          </StackCard>
        ))}
      </StackGrid>
    </StackSection>
  );
}

export default Stack;
