import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutGrid>
        <Nav />
        {children}
      </LayoutGrid>
    </>
  );
};

const LayoutGrid = styled(Grid)`
  min-height: 100vh;
`;

export default Layout;
