import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { Toast } from './Toast';

describe('Example Toast', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<Toast />);

		expect(wrapper).toMatchSnapshot();
	});
});
