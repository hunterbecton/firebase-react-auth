import React from 'react';
import styled from 'styled-components';

import H1 from '../Typography/H1';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <H1>404</H1>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default NotFound;
