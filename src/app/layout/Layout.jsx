import React from 'react';
import { Outlet } from 'react-router';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Container className="main">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
