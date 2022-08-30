import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { ForecastSwitch } from './ForecastSwitch';

describe('Example ForecastSwitch', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<ForecastSwitch />);

		expect(wrapper).toMatchSnapshot();
	});
});
