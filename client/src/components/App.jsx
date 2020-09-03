import React from 'react';

import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import ProjectSection from './ProjectSection.jsx';
import ScrollToTop from './ScrollToTop.jsx';

class App extends React.Component {
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