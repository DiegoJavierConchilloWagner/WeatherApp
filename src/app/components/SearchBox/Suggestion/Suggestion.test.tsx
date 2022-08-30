/* eslint-disable @typescript-eslint/no-empty-function */
import { IPlaceMapped } from '@common/interfaces';
import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import Suggestion from './Suggestion';

const place = {
	name: 'Buenos Aires',
	id: '99',
	lat: 100,
	lng: 100
};

describe('Example Suggestion', () => {
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(
			<Suggestion
				suggestion={place}
				handleClickOutside={() => {}}
				handleSuggestionClick={(suggestion: IPlaceMapped): void => {}}
			/>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
