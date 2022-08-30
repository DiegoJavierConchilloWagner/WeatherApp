import renderWithThemeAndProvider from '@common/utils/renderWhitThemeAndProvider';
import { SuggestionList } from './SuggestionList';

describe('Example SuggestionList', () => {
	const ref: React.MutableRefObject<null> = {
		current: null
	};
	it('should render correcty', () => {
		const wrapper = renderWithThemeAndProvider(
			<SuggestionList
				boxRef={ref}
				suggestions={[]}
				handleClickOutside={jest.fn()}
				handleSuggestionClick={jest.fn()}
			/>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
