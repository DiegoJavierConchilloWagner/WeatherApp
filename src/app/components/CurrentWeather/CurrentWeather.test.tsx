import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { CurrentWeather } from './CurrentWeather';

describe('Example CurrentWeather', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<CurrentWeather isLoading={false} isError={false} />);

		expect(wrapper).toMatchSnapshot();
	});
});
