import { RootState } from '@redux/store/store';
import ErrorBoundary from '@routes/components/ErrorBoundary';
import { Routes } from '@routes/Routes';
import GlobalStyles from '@styled/global';
import { dark, light } from '@styled/themes/index';
// import { Toast } from '@components/Toast/Toast';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
	const { themeMode } = useSelector((state: RootState) => state.uiInterface);

	const onSwitchTeme = (): DefaultTheme => (themeMode === 'DARK' ? dark : light);

	return (
		<BrowserRouter>
			<ThemeProvider theme={onSwitchTeme}>
				<GlobalStyles />
				{/* <Toast /> */}
				<ErrorBoundary>
					<Routes />
				</ErrorBoundary>
			</ThemeProvider>
		</BrowserRouter>
	);
};
