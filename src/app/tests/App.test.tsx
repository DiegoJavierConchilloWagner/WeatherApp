import { screen } from '@testing-library/react';
import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { App } from '../App';

describe('Example Page', () => {
	test('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<App />);

		expect(wrapper).toMatchSnapshot();
	});
	test('should be able to render the GenericNotFound', () => {
		renderWithThemeAndProvider(<App />);

		const text = screen.getByText(/Curent Location/i);
		expect(text).toBeInTheDocument();
	});
});
