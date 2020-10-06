import React, { Component } from 'react';

import { Navbar } from './Navbar';
import Header from './Header.jsx';
import ProjectSection from './ProjectSection.jsx';
import ScrollToTop from './ScrollToTop.jsx';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <ProjectSection />
        <ScrollToTop />
      </>
    )
  }
}

export default App;