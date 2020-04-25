import React from 'react';
import { Parallax } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';

const style = {
    main: {
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

class ContentWrapper extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Parallax className={classes.main}>
                {this.props.children}
            </Parallax>
        );
    }
}

export default withStyles(style)(ContentWrapper);