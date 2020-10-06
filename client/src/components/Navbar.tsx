import React, { FunctionComponent, useState } from 'react';
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
import { TechStack } from './TechStack';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

export const Navbar: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSnack, setOpenSnack] = useState<boolean>(false)
  const classes = useStyles();

  const handleFormOpen: () => void = () => {
    setOpen(true);
  };

  const handleFormClose: () => void = () => {
    setOpen(false);
  };

  const handleSnackClick: () => void = () => {
    setOpenSnack(true);
  };

  const closeSnack: () => void = () => {
    setOpenSnack(false);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Philip Nguyen</Typography>
          <IconButton aria-label="resume" color="inherit" href="https://docs.google.com/document/d/1qEdbKS61fG_OtjtHqElVrT-X3hzc37UkKBveqJE8-o8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Resume" arrow>
              <Badge color="secondary">
                <DescriptionIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton onClick={handleFormOpen} aria-label="contact me" color="inherit">
            <Tooltip title="Contact Me" arrow>
              <Badge color="secondary">
                <MailIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton aria-label="github" color="inherit" href="https://github.com/Nguyephi" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Github" arrow>
              <Badge color="secondary">
                <GitHubIcon />
              </Badge>
            </Tooltip>
          </IconButton>
          <IconButton aria-label="linkedin" color="inherit" href="https://www.linkedin.com/in/nguyephi/" target="_blank" rel="noopener noreferrer">
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
      <TechStack openSnack={openSnack} closeSnack={closeSnack} />
      <ContactMeForm open={open} handleClose={handleFormClose} />
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}
