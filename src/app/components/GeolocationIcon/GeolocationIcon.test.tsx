import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { GeolocationIcon } from './GeolocationIcon';

describe('Example GeolocationIcon', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<GeolocationIcon rehydrateHandler={jest.fn()} />);

		expect(wrapper).toMatchSnapshot();
	});
});
