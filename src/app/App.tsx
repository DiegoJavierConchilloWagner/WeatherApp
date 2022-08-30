import { HelmetProvider } from 'react-helmet-async';

import { RootState } from '@redux/store/store';
import ErrorBoundary from '@routes/components/ErrorBoundary';
import { Routes } from '@routes/Routes';
import GlobalStyles from '@styled/global';
import { dark, light } from '@styled/themes/index';
import { Toast } from '@components/Toast/Toast';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

export const App = () => {
	const { themeMode } = useSelector((state: RootState) => state.uiInterface);

	const onSwitchTeme = (): DefaultTheme => (themeMode === 'DARK' ? dark : light);

	return (
		<BrowserRouter>
			<HelmetProvider>
				<ThemeProvider theme={onSwitchTeme}>
					<GlobalStyles />
					<Toast />
					<ErrorBoundary>
						<Routes />
					</ErrorBoundary>
				</ThemeProvider>
			</HelmetProvider>
		</BrowserRouter>
	);
};
