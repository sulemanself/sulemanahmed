import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CallBookingSection = styled.section`
  padding: 5rem 0;
  text-align: center;
`;

const CallBookingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CallBookingText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const BookCallButton = styled(motion.button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AvailabilityInfo = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: #666;
`;

function CallBooking() {
  return (
    <CallBookingSection>
      <CallBookingTitle>Let's Chat</CallBookingTitle>
      <CallBookingText>
        Ready to discuss your project? Book a call with me and let's bring your ideas to life.
      </CallBookingText>
      <BookCallButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book a Call
      </BookCallButton>
      <AvailabilityInfo>
        Available Monday to Friday, 9 AM - 5 PM EST
      </AvailabilityInfo>
    </CallBookingSection>
  );
}

export default CallBooking;
