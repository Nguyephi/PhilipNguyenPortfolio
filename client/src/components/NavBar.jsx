import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ReorderIcon from '@material-ui/icons/Reorder';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ContactMeForm from './ContactMeForm.jsx';
import TechStack from './TechStack.jsx'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false)
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackClick = () => {
    setOpenSnack(true);
  };

  const handleSnackClose = (e) => {
    setOpenSnack(false);
  };

  const handleResume = (e) => {
    e.preventDefault()
    window.open('https://docs.google.com/document/d/1qEdbKS61fG_OtjtHqElVrT-X3hzc37UkKBveqJE8-o8/edit?usp=sharing', '_blank', 'noopener')
  };

  const handleGithub = (e) => {
    e.preventDefault()
    window.open('https://github.com/Nguyephi', '_blank', 'noopener')
  };

  const handleLinkedin = (e) => {
    e.preventDefault()
    window.open('https://www.linkedin.com/in/nguyephi/', '_blank', 'noopener')
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Philip Nguyen</Typography>
          <IconButton onClick={(e) => handleResume(e)} aria-label="resume" color="inherit">
            <Tooltip title="Resume" arrow>
              <Badge color="secondary">
                <DescriptionIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton onClick={handleClickOpen} aria-label="contact me" color="inherit">
            <Tooltip title="Contact Me" arrow>
              <Badge color="secondary">
                <MailIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton onClick={(e) => handleGithub(e)} aria-label="github" color="inherit">
            <Tooltip title="Github" arrow>
              <Badge color="secondary">
                <GitHubIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton onClick={(e) => handleLinkedin(e)} aria-label="linkedin" color="inherit">
            <Tooltip title="LinkedIn" arrow>
              <Badge color="secondary">
                <LinkedInIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton onClick={handleSnackClick} aria-label="techStack" color="inherit">
            <Tooltip title="Tech Stack" arrow>
              <Badge color="secondary">
                <ReorderIcon />
              </Badge>
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
      <TechStack openSnack={openSnack} handleSnackClose={handleSnackClose} />
      <ContactMeForm open={open} handleClose={handleClose} />
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}