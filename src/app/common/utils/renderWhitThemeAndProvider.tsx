import React, { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { dark } from '../../styled/themes/dark';
import { store } from '../../redux/store/store';

type BaseRenderOptions = Omit<Parameters<typeof render>[1], 'wrapper'>;

const ThemeAndProviderWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={dark}>{children}</ThemeProvider>
		</Provider>
	);
};

const renderWithThemeAndProvider = (ui: React.ReactElement, options: BaseRenderOptions = {}): RenderResult =>
	render(ui, {
		wrapper: ThemeAndProviderWrapper,
		...options
	});

export default renderWithThemeAndProvider;
export * from '@testing-library/react';
