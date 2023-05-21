import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default Layout;
