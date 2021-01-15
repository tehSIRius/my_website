import React from 'react';

import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import amber from '@material-ui/core/colors/amber';

export interface MainProps {
	children?: React.ReactNode;
}

export const Main: React.FC = (props: MainProps) => {
	const theme = createMuiTheme({
		palette: {
			primary: amber,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{props.children}
		</ThemeProvider>
	);
};
