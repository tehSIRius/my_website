import React from 'react';
import { Grid, Paper, Typography, Card, CardContent, CardMedia, MobileStepper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ContentWrapper from '../wrappers/ContentWrapper';

const style = {
    wrapper: {
        height: '97vh',
        width: '100vw',
    },
    content: {
        width: '70vw',
        height: '60vh',
    }
}

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <ContentWrapper id="about-me">
                <Paper elevation={1} className={classes.wrapper}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        spacing={5}
                    >
                        <Grid item xs={12}>
                            <Card className={classes.content} elevation={0}>
                                <Grid
                                    direction="row"
                                    spacing={5}
                                >
                                    <Grid item xs={12} md={6}>
                                        <CardContent>
                                            <Typography variant="h3" component="h2" id="about-me">
                                                Who Am I?
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                Oh, yes, that is a very good question.
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <CardMedia>
                                            <MobileStepper
                                                variant="dots"
                                                steps={6}
                                                position="static"
                                            >

                                            </MobileStepper>
                                        </CardMedia>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </ContentWrapper>
        );
    }
}

export default withStyles(style)(AboutMe);