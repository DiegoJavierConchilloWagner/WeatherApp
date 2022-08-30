import { FC } from 'react';

import { IPlaceMapped } from '@common/index';

import { StyledSuggestion } from '../styled';

interface Props {
	suggestion: IPlaceMapped;
	handleClickOutside: () => void;
	handleSuggestionClick: (suggestion: IPlaceMapped) => void;
}

const Suggestion: FC<Props> = ({ suggestion, handleClickOutside, handleSuggestionClick }) => {
	const handleSelectPlace = () => {
		handleSuggestionClick(suggestion);
		handleClickOutside();
	};

	return (
		<StyledSuggestion onClick={handleSelectPlace}>
			<p>{suggestion.name}</p>
		</StyledSuggestion>
	);
};

export default Suggestion;
