import React from 'react';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';

const style = {
    fab: {
        position: 'absolute',
        right: '2vw',
        bottom: '2vw',
    }
};

class FloatingButton extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Fab color="primary" aria-label="continue" className={classes.fab}>
                <ExpandMoreIcon />
            </Fab>
        );
    }
}

export default withStyles(style)(FloatingButton);