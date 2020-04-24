import React from 'react';
import { Container } from '@material-ui/core';
import { Parallax } from 'react-parallax';

class AboutMe extends React.Component {
    render() {
        return (
            <Parallax>
                <Container>
                    <div style={{ height: '700px'}}></div>
                </Container>
            </Parallax>
        );
    }
}

export default AboutMe;