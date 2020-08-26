import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

export default function ContactMeForm(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleEmail = () => {
    console.log(name, email, message)
    // make api route to send email
    props.handleClose()
  }

  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="contact-me-title" open={props.open}>
        <DialogTitle id="contact-me-title" onClose={props.handleClose}>
          Contact me
        </DialogTitle>
        <TextField
          required
          id="name"
          label="Name"
          variant="outlined"
          onChange={(e) => { setName(e.target.value) }}
          className='textFieldMargin'
        />
        <TextField
          required
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => { setEmail(e.target.value) }}
          className='textFieldMargin'
        />
        <TextField
          required
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => { setMessage(e.target.value) }}
        />
        <DialogActions>
          <Button autoFocus onClick={() => handleEmail()} color="primary">
            Email me
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}