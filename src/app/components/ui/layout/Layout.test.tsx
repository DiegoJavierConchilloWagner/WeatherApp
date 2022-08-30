import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { GeoError } from '../Errors';
import { Layout } from './Layout';

describe('Example Layout', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(
			<Layout rehydrateHandler={jest.fn()}>
				<GeoError />
			</Layout>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
