import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { GeoError } from './GeoError';

describe('Example GeoError', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<GeoError />);

		expect(wrapper).toMatchSnapshot();
	});
});
