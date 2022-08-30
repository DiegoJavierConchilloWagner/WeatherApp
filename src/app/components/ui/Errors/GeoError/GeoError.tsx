/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

import { WeatherIcon } from '@components/WeatherIcon/WeatherIcon';
import { StyledMessage } from '../styled';

export const GeoError: FC = () => {
	return (
		<StyledMessage>
			<WeatherIcon id={200} icon='n' size={200} isLoading={false} />
			<h1>
				There was a problem getting your curren position but don't worry, you can search for a place to see its
				weather.
			</h1>
		</StyledMessage>
	);
};
