import React from 'react';
import { Helmet } from 'react-helmet';

class HelmetHeader extends React.Component {
    render() {
        return (
            <Helmet>
                <title>Patrik Dvořáček</title>
                <meta name="description" content="The personal page of Patrik Dvořáček." />
                <meta name="theme-color" content="#ff5722" />
                <meta name="og:title" property="og:title" content="Patrik Dvořáček" />
                <meta name="og:description" property="og:description" content="The personal page of Patrik Dvořáček." />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://dvoracek.dev" />
                <meta name="robots" content="index, follow" />
                <link href="https://dvoracek.dev" rel="canonical" />
            </Helmet>
        );
    }
}

export default HelmetHeader;