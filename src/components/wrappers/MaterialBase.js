import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function MaterialBase(props) {
    const colorPreference = useMediaQuery('(prefers-color-scheme: dark)');
    var theme = React.useMemo(
        () => createMuiTheme({
            palette: {
                primary: deepOrange,
                type: colorPreference ? 'dark' : 'light',
            }
        }),
        [colorPreference],
    );

    theme = responsiveFontSizes(theme);

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}

export default MaterialBase;