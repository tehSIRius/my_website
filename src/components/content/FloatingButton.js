import React from 'react';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import jump from 'jump.js';

const style = {
    fab: {
        position: 'absolute',
        right: '2vw',
        bottom: '2vw',
    }
};

class FloatingButton extends React.Component {
    handleScroll() {
        jump('#about-me');
    }

    render() {
        const { classes } = this.props;

        return (
            <Fab color="primary" aria-label="continue" className={classes.fab} onClick={this.handleScroll}>
                <ExpandMoreIcon />
            </Fab>
        );
    }
}

export default withStyles(style)(FloatingButton);