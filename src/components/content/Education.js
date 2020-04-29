import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ContentWrapper from '../wrappers/ContentWrapper';

const styles = {
    wrapper: {
        minHeight: '100vh',
        width: '100vw',
        paddingTop: '5vh',
    },
    content: {
        minHeight: '60vh',
    },
}

class Education extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <ContentWrapper>
                <Grid
                    className={classes.mainWrapper}
                    container
                    direction="row"
                    justify="center"
                    spacing={10}
                >
                    <Grid item xs={12} md={5}>
                        <Card className={classes.content} elevation={0}>
                            <CardContent>
                                <Typography variant="h3" component="h2" id="about-me">
                                    Where I Did Learn Things
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card className={classes.content}>
                            <CardContent>
                                <Typography variant="h3" component="h2" id="about-me">
                                    Where I Did Learn Things
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </ContentWrapper>
        );
    }
}

export default withStyles(styles)(Education);