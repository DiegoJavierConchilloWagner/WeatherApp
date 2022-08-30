import { FC } from 'react';

import { useSelector } from 'react-redux';

import { IWeekMapped } from '@common/index';

import { RootState } from '@redux/store/store';
import { ForecastDay } from '../ForecastDay/ForecastDay';
import { StyledForecastWeek } from '../styled';

interface Props {
	isLoading: boolean;
}

export const ForecastWeek: FC<Props> = ({ isLoading }) => {
	const { week } = useSelector((state: RootState) => state.WeatherInterface);

	return (
		<StyledForecastWeek>
			{week.map(
				(day: IWeekMapped, index: number) =>
					index > 0 && <ForecastDay key={day.dt} day={day} isLoading={isLoading} />
			)}
		</StyledForecastWeek>
	);
};
