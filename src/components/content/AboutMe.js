import React from 'react';
import { Grid, Paper, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InstagramEmbed from 'react-instagram-embed';

import ContentWrapper from '../wrappers/ContentWrapper';

const style = {
    wrapper: {
        minHeight: '100vh',
        width: '100vw',
        paddingTop: '5vh',
    },
    content: {
        minHeight: '60vh',
    },
    img: {

    }
}

class AboutMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePicture: 0,
        };
    }

    handleStepChange() {

    }

    render() {
        const { classes } = this.props;

        return (
            <ContentWrapper id="about-me">
                <Paper elevation={1} className={classes.wrapper}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={10}
                    >
                        <Grid item xs={12} md={5}>
                            <Card className={classes.content} elevation={0}>
                                <CardContent>
                                    <Typography variant="h3" component="h2" id="about-me">
                                        Who Am I?
                                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Hi. Hello. Welcome. My name is Patrik and this is my website where I would like to introduce me and my stuff.
                                        And by my stuff I do not mean my private parts. This is not a naughty website. For now anyway.
                                        I guess some facts are in order since this is the "Who Am I?" section. Alright, here goes nothing:
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        My name is Patrik Dvořáček. I am from the Czech Republic. I like videogames, pistachio ice cream, beer and computers.
                                        In fact, I like computers so much that I decided to learn about them at the Faculty of Electrical Engineering at the Czech Technical University in Prague.
                                        So if you want to take away only one word that describes me but really does not encapsulate everything, I would choose <b>geek</b>.
                                    </Typography>
                                    <Typography>
                                        Contrary to popular belief about geeks, I do have a social life from time to time. Here is some evidence of that.
                                        And yes, I am very photogenic and extremely mature. And yes, I look like I am about to sneeze in the picture. That is on purpose. Definitely.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Card elevation={0}>
                                <CardContent>
                                    <InstagramEmbed
                                        url="https://www.instagram.com/p/B1enEfFIeIH/"
                                        hideCaption={true}
                                        containerTagName="div"
                                        protocol=""
                                        injectScript
                                        className={classes.img}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </ContentWrapper>
        );
    }
}

export default withStyles(style)(AboutMe);