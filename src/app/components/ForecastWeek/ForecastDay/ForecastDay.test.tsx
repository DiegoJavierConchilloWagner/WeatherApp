import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { ForecastDay } from './ForecastDay';

const day = {
	dt: 0,
	feelsLike: 0,
	tempMin: 0,
	tempMax: 0,
	description: '',
	id: 0,
	main: '',
	icon: ''
};

describe('Example ForecastSwitch', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<ForecastDay day={day} isLoading={false} />);

		expect(wrapper).toMatchSnapshot();
	});
});
