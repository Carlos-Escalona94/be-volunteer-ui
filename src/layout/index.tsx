import React from 'react';
import { NavMenu } from '../components/NavBar';
import Router from '../routes';

const Layout = () => {

    const pages = [
        {
          label: 'Home',
          path: '/home'
        }
      ]

    return (
        <>
            <NavMenu pages={pages}  />
            <Router />
        </>
    );
}

export default Layout;