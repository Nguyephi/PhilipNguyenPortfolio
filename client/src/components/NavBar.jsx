import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ContactMeForm from './ContactMeForm.jsx';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

export default function Navbar(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleGithub = (e) => {
    e.preventDefault()
    window.open('https://github.com/Nguyephi', '_blank')
  };

  const handleLinkedin = (e) => {
    e.preventDefault()
    window.open('https://www.linkedin.com/in/nguyephi/', '_blank')
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Philip Nguyen</Typography>
          <IconButton aria-label="resume" color="inherit">
            <Badge color="secondary">
              <DescriptionIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleClickOpen} aria-label="contact me" color="inherit">
            <Badge color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={(e) => handleGithub(e)} aria-label="github" color="inherit">
            <Badge color="secondary">
              <GitHubIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={(e) => handleLinkedin(e)} aria-label="linkedin" color="inherit">
            <Badge color="secondary">
              <LinkedInIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <ContactMeForm open={open} handleClose={handleClose} />
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}