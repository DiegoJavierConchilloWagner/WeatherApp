import { FC } from 'react';

import { useSelector } from 'react-redux';

import { ITwoDaysMapped } from '@common/interfaces';
import { RootState } from '@redux/store/store';

import { ForecastedHour } from '../ForecastedHour/ForecastedHour';
import { StyledForecastTwoDays } from '../styled';

interface Props {
	isLoading: boolean;
}

export const ForecastTwoDays: FC<Props> = ({ isLoading }) => {
	const { twoDays } = useSelector((state: RootState) => state.WeatherInterface);

	return (
		<StyledForecastTwoDays>
			{twoDays.map(
				(hour: ITwoDaysMapped, index: number) =>
					index > 0 && <ForecastedHour key={hour.dt} hour={hour} isLoading={isLoading} />
			)}
		</StyledForecastTwoDays>
	);
};
