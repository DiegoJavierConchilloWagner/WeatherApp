import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { ForecastedHour } from './ForecastedHour';

describe('Example ForecastedHour', () => {
	const hour = {
		dt: 0,
		feelsLike: 0,
		temp: 0,
		description: '',
		id: 0,
		main: '',
		icon: ''
	};
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<ForecastedHour hour={hour} isLoading={false} />);

		expect(wrapper).toMatchSnapshot();
	});
});
