import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { GenericNotFound } from './GenericNotFound';

describe('Example GenericNotFound', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(<GenericNotFound />);

		expect(wrapper).toMatchSnapshot();
	});
});
