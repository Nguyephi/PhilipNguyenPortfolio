import * as React from 'react';

import { Navbar } from './Navbar';
import { Header } from './Header';
import { ProjectSection } from './ProjectSection';
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