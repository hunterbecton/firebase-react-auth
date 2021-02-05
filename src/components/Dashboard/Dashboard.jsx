import React from 'react';
import styled from 'styled-components';

import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const auth = useAuth();

  return (
    <DashboardContainer>
      <H1>Dashboard</H1>
      <Text>Logged in as {auth.user.email}</Text>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default Dashboard;
