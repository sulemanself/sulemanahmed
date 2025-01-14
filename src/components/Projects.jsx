import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.p`
  font-size: 1rem;
  color: var(--secondary-color);
`;

const projects = [
  { name: 'Project 1', category: 'Web Design', image: 'https://via.placeholder.com/300x200' },
  { name: 'Project 2', category: 'Mobile App', image: 'https://via.placeholder.com/300x200' },
  { name: 'Project 3', category: 'Branding', image: 'https://via.placeholder.com/300x200' },
  // Add more projects as needed
];

function Projects() {
  return (
    <ProjectsSection>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
              <ProjectCategory>{project.category}</ProjectCategory>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
