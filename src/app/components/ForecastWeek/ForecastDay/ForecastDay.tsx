import { FC } from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { IWeekMapped, kelvinToCelcius } from '@common/index';
import { RootState } from '@redux/store/store';
import { WeatherIcon } from '../../WeatherIcon/WeatherIcon';

import { Icon, IconContainer, StyledForecastedDay, TemperaturesContainer } from '../styled';

interface Props {
	day: IWeekMapped;
	isLoading: boolean;
}

export const ForecastDay: FC<Props> = ({ day, isLoading }) => {
	const { isCurrentWeatherLoading } = useSelector((state: RootState) => state.uiInterface);

	const { id, icon, main, dt } = day;
	const date = dayjs.unix(dt);

	return (
		<StyledForecastedDay>
			<h3>{date.format('dddd')}</h3>
			<IconContainer>
				<Icon>
					<WeatherIcon id={id} icon={icon} size={80} isLoading={isLoading} />
					{!isCurrentWeatherLoading && <h5>{main}</h5>}
				</Icon>
				{!isCurrentWeatherLoading && (
					<TemperaturesContainer>
						<h3>{kelvinToCelcius(day.tempMax)}</h3>
						<h4>{kelvinToCelcius(day.tempMin)}</h4>
					</TemperaturesContainer>
				)}
			</IconContainer>
		</StyledForecastedDay>
	);
};
