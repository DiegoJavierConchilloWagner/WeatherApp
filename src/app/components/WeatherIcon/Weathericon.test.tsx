import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { WeatherIcon } from './WeatherIcon';

describe('Example WeatherIcon', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<WeatherIcon id={0} icon='' size={0} isLoading={false} />);

		expect(wrapper).toMatchSnapshot();
	});
});
