import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import ScrollTrigger from '../wrappers/ScrollTrigger';

class Navbar extends React.Component {
    render() {
        return (
            <ScrollTrigger {...this.props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h5">Patrik Dvořáček</Typography>
                    </Toolbar>
                </AppBar>
            </ScrollTrigger>
        );
    }
}

export default Navbar;