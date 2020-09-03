import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import '../css/contactMeForm.css';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ContactMeForm({ open, handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, title, message })
    }
    fetch('/api/sendemail', requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    handleClose()
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="contact-me-title" open={open}>
        <DialogTitle id="contact-me-title" onClose={handleClose}>
          Contact me
        </DialogTitle>
        <form onSubmit={(e) => handleEmail(e)}>
          <FormControl variant="outlined" className='w-100'>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <OutlinedInput
              required
              id="name-input"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              className='textFieldMargin'
              label="Name" />
          </FormControl>
          <FormControl variant="outlined" className='w-100'>
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <OutlinedInput
              required
              id="email-input"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className='textFieldMargin'
              label="Email" />
          </FormControl>
          <FormControl variant="outlined" className='w-100'>
            <InputLabel htmlFor="title-input">Title</InputLabel>
            <OutlinedInput
              required
              id="title-input"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              className='textFieldMargin'
              label="Title" />
          </FormControl>
          <FormControl variant="outlined" className='w-100'>
            <InputLabel htmlFor="message-input">Message</InputLabel>
            <OutlinedInput
              required
              id="message-input"
              value={message}
              onChange={(e) => { setMessage(e.target.value) }}
              multiline
              rows={4}
              label="Message" />
          </FormControl>
          <DialogActions>
            <Button autoFocus type='submit' color="primary">
              Email me
          </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
