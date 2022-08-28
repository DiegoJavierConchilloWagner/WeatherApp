import { RootState } from '@redux/store/store'
import ErrorBoundary from '@routes/components/ErrorBoundary'
import { Routes } from '@routes/Routes'
import GlobalStyles from '@styled/global'
import dark from '@styled/themes/dark'
import light from '@styled/themes/light'

import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import './styles/global.css'

export const App = () => {
	const { themeMode } = useSelector((state: RootState) => state.uiInterface)

	return (
		<BrowserRouter>
			<ThemeProvider theme={themeMode === 'DARK' ? dark : light}>
				<GlobalStyles />
				<ErrorBoundary>
					<Routes />
				</ErrorBoundary>
			</ThemeProvider>
		</BrowserRouter>
	)
}
