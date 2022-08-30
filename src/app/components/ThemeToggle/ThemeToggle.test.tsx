import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { ThemeToggle } from './ThemeToggle';

describe('Example ThemeToggle', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<ThemeToggle />);

		expect(wrapper).toMatchSnapshot();
	});
});
