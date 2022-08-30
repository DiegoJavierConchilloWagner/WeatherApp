import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { ForecastTwoDays } from './ForecastTwoDays';

describe('Example ForecastTwoDays', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<ForecastTwoDays isLoading={false} />);

		expect(wrapper).toMatchSnapshot();
	});
});
