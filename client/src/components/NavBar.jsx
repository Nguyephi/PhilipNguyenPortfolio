import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navbar(props) {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Philip Nguyen</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}