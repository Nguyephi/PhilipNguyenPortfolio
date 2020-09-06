import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Projects from '../data/projectData.json'
import styles from '../css/projectSection.module.css'

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

export default function ProjectSection() {
    const classes = useStyles();
    const RenderProjects = () => {
        let firstKeyCount = 0;
        let secondKeyCount = 0;
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
                        <Link size="Large" variant="body2" color="primary" href={repo_link} target="_blank" rel="noopener noreferrer">
                            REPO
                        </Link>
                    </CardActions>
                </Card>
            )
        })
    }

    return (
        <div id={styles.projectRoot}>
            <Typography id={styles.projectTitle} variant="h3" component="h1">
                Featured Applications
            </Typography>
            <RenderProjects />
        </div>
    )
};