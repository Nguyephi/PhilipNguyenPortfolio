import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Portfolio from '../data/portfolioTechStack.json';

const useStyles = makeStyles((theme) => ({
    snackTitle: {
        marginBottom: 3
    },
    snackButton: {
        marginBottom: 103
    }
}))

export default function TechStack({ openSnack, handleSnackClose }) {
    const classes = useStyles();

    const RenderTechStack = () => {
        let keyCount = 0;
        return (
            <React.Fragment>
                <h3 className={classes.snackTitle}>This application was created with</h3>
                {Portfolio.techStack.map((tech) => {
                    return (
                        <div key={keyCount++}>
                            <Typography variant="body2" component="h4">
                                {tech}
                            </Typography>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={openSnack}
            autoHideDuration={60000}
            onClose={handleSnackClose}
            message={<RenderTechStack />}
            action={
                <React.Fragment>
                    <IconButton className={classes.snackButton} size="small" aria-label="close" color="inherit" onClick={handleSnackClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    )
}