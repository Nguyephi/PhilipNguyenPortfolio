import React, { FunctionComponent, useState } from 'react';
import Typist from 'react-typist';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Bio } from './Bio'
import '../css/header.css';
import headerImage from '../img/Philip_Nguyen_Portfolio_Header.png';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: 'white'
  }
}))

export const Header: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <div id='header-root' style={{ backgroundImage: `url(${headerImage})` }}>
      <div id='header-container'>
        <div id='header-title'>
          <Typist avgTypingSpeed={70} startDelay={1000} cursor={{ hideWhenDone: true }} onTypingDone={() => { setShow(true) }}>
            <Typography className={classes.title} variant="h3" component="h1">
              Software Engineer
            </Typography>
            <Typist.Delay ms={500} />
            <br />
            <Typography className={classes.title} variant="h3" component="h1">
              Full-Stack Developer
            </Typography>
            <Typist.Delay ms={1000} />
          </Typist>
        </div>
        <Bio show={show} />
      </div>
    </div>
  )
}