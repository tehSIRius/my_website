import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ContentWrapper from '../wrappers/ContentWrapper';

const style = {
    content: {
        height: '97vh',
        width: '100vw',
    }
}

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <ContentWrapper id="about-me">
                <Paper elevation={1} className={classes.content}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                        <Typography variant="h3" component="h2" id="about-me">
                            Who Am I?
                        </Typography>
                    </Grid>
                </Paper>
            </ContentWrapper>
        );
    }
}

export default withStyles(style)(AboutMe);