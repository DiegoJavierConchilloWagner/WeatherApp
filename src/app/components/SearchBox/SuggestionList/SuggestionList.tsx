import { FC, MutableRefObject } from 'react';

import { IPlaceMapped } from '@common/interfaces';
import Suggestion from '../Suggestion/Suggestion';

import { StyledSuggestions } from '../styled';

interface Props {
	boxRef: MutableRefObject<null>;
	suggestions: IPlaceMapped[];
	handleClickOutside: () => void;
	handleSuggestionClick: (suggestion: IPlaceMapped) => void;
}

export const SuggestionList: FC<Props> = ({ boxRef, suggestions, handleClickOutside, handleSuggestionClick }) => {
	return (
		<StyledSuggestions ref={boxRef}>
			{suggestions.map((sugg) => (
				<Suggestion
					key={sugg.id}
					suggestion={sugg}
					handleClickOutside={handleClickOutside}
					handleSuggestionClick={handleSuggestionClick}
				/>
			))}
		</StyledSuggestions>
	);
};
