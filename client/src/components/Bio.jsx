import React from 'react';
import Typist from 'react-typist';
import Typography from '@material-ui/core/Typography';

import avatar from '../img/phils-avatar.jpg';
import styles from '../css/bio.module.css';

export default function Bio({ show }) {
    return (
        <div id={styles.bioRoot}>
            {show ?
                <div id={styles.bioContainer}>
                    <img id={styles.bioAvatar} alt="Philip Nguyen" src={avatar} />
                    <br />
                    <div id={styles.bio}>
                        <Typography variant="body1" component="h3">
                            <Typist avgTypingSpeed={50} startDelay={1000} cursor={{ hideWhenDone: true }}>
                                <span id={styles.bio} className={style.white}>
                                    Hello world! Welcome to my portfolio. I am an autonomous and passionate software engineer who loves building applications using popular and modern technologies; such as React, NodeJS, MongoDB and many more. I thrive in solving complex problems, as frustrating as it can be sometimes I enjoy the reward in debugging and making my code work. I started my journey by wanting a career change and took some software engineering immersive where I spent thousands of hours gaining my experiences. My biggest take way from this was the ability to learn how to learn and to never stop acquiring knowledge. I'm confident my skills will take me wherever I want to go in this field.
                                <br />
                                On my spare time I love practicing mindful meditation, brazilian jiu-jitsu, and making simple and delightful meals for my family.
                                </span>
                            </Typist>
                        </Typography>
                    </div>
                </div>
                : null
            }
        </div>
    )
};