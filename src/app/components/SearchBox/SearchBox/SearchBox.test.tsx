import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { SearchBox } from './SearchBox';

describe('Example SearchBox', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<SearchBox />);

		expect(wrapper).toMatchSnapshot();
	});
});
