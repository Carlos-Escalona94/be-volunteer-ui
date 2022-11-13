import React from 'react';

import { Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

import { NavMenu } from './components/NavBar';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavMenu />
      <Route path="/home" >
        <Home />
      </Route>
      <Route path="/contact" >
        <Contact />
      </Route>
    </>
  );
}

export default App;
