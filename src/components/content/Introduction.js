import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ContentWrapper from '../wrappers/ContentWrapper';

import main from '../../img/main.jpg';

const introStyle = {
    avatar: {
        width: '35vw',
        height: '35vw',
        borderRadius: '50%',
    },
    avatarWrapper: {
        display: 'flex',
        justifyContent: 'center',
    }
}

class Introduction extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <ContentWrapper id="introduction">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    spacing={5}
                >
                    <Grid item xs={12} className={classes.avatarWrapper}>
                        <img src={main} alt="This is Patrik." className={classes.avatar} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h2">Yes, this is Patrik.</Typography>
                    </Grid>
                </Grid>
            </ContentWrapper>
        );
    }
}

export default withStyles(introStyle)(Introduction);