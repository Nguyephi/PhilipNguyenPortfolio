import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Projects from '../data/projectData.json'
import '../css/projectSection.css'
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '1em',
        paddingLeft: '1em',
        paddingRight: '1em'
    },
    projectTitle: {
        marginBottom: 7
    },
    media: {
        height: 140,
    },
});

export const ProjectSection: FunctionComponent = () => {
    const classes = useStyles();
    const renderProjects: () => JSX.Element[] = () => {
        let firstKeyCount: number = 0;
        let secondKeyCount: number = 0;
        return Projects.repos.map(({ repo_title, job_title, repo_subtitle, repo_techStack, bullet_point, repo_link }) => {
            return (
                <Card key={firstKeyCount++} className={classes.root}>
                    <CardContent>
                        <Typography className={classes.projectTitle} variant="h5" component="h2">
                            {repo_title}
                        </Typography>
                        <Typography variant="subtitle1" component="h4">
                            {repo_subtitle}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="h4">
                            {job_title} <span className='black divider-style'>|</span> {repo_techStack}
                        </Typography>
                        {bullet_point.map((talkingPoint) => {
                            return (
                                <div key={secondKeyCount++}>
                                    <Typography variant="caption" color="textSecondary" component="p">
                                        • {talkingPoint}
                                    </Typography>
                                </div>
                            )
                        })}
                    </CardContent>
                    <CardActions>
                        <Button fullWidth size="large" href={repo_link} target="_blank" rel="noopener noreferrer">
                            REPO
                        </Button>
                    </CardActions>
                </Card>
            )
        })
    }

    return (
        <div id='project-root'>
            <Typography id='project-title' variant="h3" component="h1">
                Featured Applications
            </Typography>
            {renderProjects()}
        </div>
    )
};