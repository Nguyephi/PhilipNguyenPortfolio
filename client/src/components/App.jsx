import React from 'react';

import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import ScrollToTop from './ScrollToTop.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <ScrollToTop />
      </>
    )
  }
}

export default App;