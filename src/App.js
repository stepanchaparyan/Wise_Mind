import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import Navbar from './components/layouts/Navbar/Navbar';
// import Footer from './components/layouts/Footer/Footer';
import Routes from './Routes';
import theme from '../src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/* <Navbar  /> */}
          <Routes />
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
