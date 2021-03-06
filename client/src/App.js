import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import Routes from './Routes';
import theme from '../src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Navbar />
          <Routes />
          {/* <Footer /> */}
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
