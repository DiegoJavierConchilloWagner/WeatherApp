import { FC } from 'react';

import dayjs from 'dayjs';

import { useSelector } from 'react-redux';

import { kelvinToCelcius } from '@common/index';
import { RootState } from '@redux/store/store';

import { GeoError } from '@components/ui/Errors';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import { InfoContainer, StyledCurrentWeather, TemperatureContainer, WeatherContainer } from './styled';

interface Props {
	isLoading: boolean;
	isError: boolean;
}

export const CurrentWeather: FC<Props> = ({ isLoading, isError }) => {
	const { current } = useSelector((state: RootState) => state.WeatherInterface);
	const { selectedPlace } = useSelector((state: RootState) => state.placeInterface);

	const { dt, feelsLike, temp, main, id, icon } = current;
	const date = dayjs(new Date(dt * 1000));

	const selectedPlaceName =
		selectedPlace.name.length > 0 ? selectedPlace.name.split(',')[0] : selectedPlace.name.split(',')[1];
	const currentDate = dt ? date.format('MMM, dddd YYYY') : 'Loading..';
	const currentHour = dt ? date.format('HH:mm') : '';
	const tempFeelsLike = feelsLike ? kelvinToCelcius(feelsLike) : '...';
	const currentTemp = temp ? kelvinToCelcius(temp) : '...';

	if (isError) return <GeoError />;

	return (
		<StyledCurrentWeather>
			<InfoContainer>
				<div>
					<h1>{selectedPlaceName || 'Curent Location'}</h1>
					<p>{currentDate}</p>
				</div>
				<h3>{currentHour}</h3>
			</InfoContainer>
			<WeatherContainer>
				<p>Today</p>
				<TemperatureContainer>
					<div>
						<WeatherIcon id={id} icon={icon} size={100} isLoading={isLoading} />
						<h5>{main}</h5>
					</div>
					<div>
						<h4>
							<span>Feels-Like:</span> {tempFeelsLike}°
						</h4>
						<h5>
							<span>Temperature:</span> {currentTemp}°
						</h5>
					</div>
				</TemperatureContainer>
			</WeatherContainer>
		</StyledCurrentWeather>
	);
};
