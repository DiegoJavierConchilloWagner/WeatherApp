import { FC } from 'react';

import { BsGeoAlt } from 'react-icons/bs';

import { GeolocationIconContainer } from './styled';

interface Props {
	rehydrateHandler: () => void;
}

export const GeolocationIcon: FC<Props> = ({ rehydrateHandler }) => {
	return (
		<GeolocationIconContainer>
			<BsGeoAlt id='searchIcon' size={35} color='white' onClick={rehydrateHandler} />
		</GeolocationIconContainer>
	);
};
