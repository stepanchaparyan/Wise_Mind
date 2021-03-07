import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './containers/Navbar/Navbar';
import FooterContainer from './containers/Footer/FooterContainer';
import Routes from './Routes';
import theme from '../src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Navbar />
          <Routes />
          <FooterContainer />
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
