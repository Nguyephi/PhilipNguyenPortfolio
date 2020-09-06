import React, { useState } from 'react';
import Typist from 'react-typist';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Bio from './Bio.jsx'
import styles from '../css/header.module.css';
import headerImage from '../img/Philip_Nguyen_Portfolio_Header.png';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: 'white'
  }
}))

export default function Header() {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  return (
    <div id={styles.headerRoot} style={{ backgroundImage: `url(${headerImage})` }}>
      <div id={styles.headerContainer}>
        <div id={styles.headerTitle}>
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