import React from 'react';
import { Helmet } from 'react-helmet';

class Page404 extends React.Component {
    render() {
        return (
            <Helmet>
                <meta httpEquiv="Refresh" content="0; https://dvoracek.dev" />
            </Helmet>
        );
    }
}

export default Page404;