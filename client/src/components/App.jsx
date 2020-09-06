import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import ProjectSection from './ProjectSection.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import theme from '../utils/theme.js'
import styles from '../css/app.module.css';

class App extends React.Component {

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Header />
          <ProjectSection />
          <ScrollToTop />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;