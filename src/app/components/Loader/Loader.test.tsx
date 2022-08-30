import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { Loader } from './Loader';

describe('Example Loader', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<Loader />);

		expect(wrapper).toMatchSnapshot();
	});
});
