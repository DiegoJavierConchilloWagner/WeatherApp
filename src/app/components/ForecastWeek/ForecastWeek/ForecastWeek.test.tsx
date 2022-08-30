import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { ForecastWeek } from './ForecastWeek';

describe('Example ForecastSwitch', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<ForecastWeek isLoading={false} />);

		expect(wrapper).toMatchSnapshot();
	});
});
