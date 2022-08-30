import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { HelmetProvider } from 'react-helmet-async';
import { GeoError } from '../Errors';
import { Layout } from './Layout';

describe('Example Layout', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(
			<HelmetProvider>
				<Layout rehydrateHandler={jest.fn()}>
					<GeoError />
				</Layout>
			</HelmetProvider>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
