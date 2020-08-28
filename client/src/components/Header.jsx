import React, { useState } from 'react';
import Typist from 'react-typist';

import '../css/header.css'

export default function Header() {
  const [showBio, setShowBio] = useState(false);

  const MyBio = () => {
    return (
      <div>
        {showBio &&
          <h1>My Bio</h1>
        }
      </div>
    )
  }

  return (
    <div id='header'>
      <Typist avgTypingSpeed={70} startDelay={1000} cursor={{ hideWhenDone: true }} onTypingDone={() => { setShowBio(true) }}>
        <h1>Software Engineer</h1>
        <Typist.Delay ms={500} />
        <br />
        <h1>Full-Stack Developer</h1>
        <Typist.Delay ms={1000} />
      </Typist>
      <MyBio />
    </div>
  )
}