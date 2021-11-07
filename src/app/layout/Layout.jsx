import { Outlet } from 'react-router';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container className="main">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
