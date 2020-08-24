import React from 'react';
import Typist from 'react-typist';

import '../css/header.css'
import headerFullBackground from '../img/Philip_Nguyen_Portfolio_Header.jpg';

export default function Header() {
  return (
    <div id='header-background' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1B263B',
      backgroundImage: `url(${headerFullBackground})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '40rem'
    }}>
      <Typist avgTypingSpeed={60} startDelay={1000} cursor={{ hideWhenDone: true }}>
        <h1 style={{ display: 'inline-block' }}>Software Engineer</h1>
      </Typist>
    </div>
  )
}