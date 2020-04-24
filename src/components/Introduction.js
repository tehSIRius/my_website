import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Avatar, Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import main from '../img/main.jpg';

const introStyle = {
    avatar: {
        width: '30%',
        height: '30%',
    }
}

class Introduction extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Parallax id="introduction">
                <Box my={2}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                        <Avatar src={main} alt="This is Patrik." className={classes.avatar} />
                        <Typography component="h1" variant="h1">
                            Yes, this is Patrik.
                    </Typography>

                    </Grid>
                </Box>
            </Parallax>
        );
    }
}

export default withStyles(introStyle)(Introduction);