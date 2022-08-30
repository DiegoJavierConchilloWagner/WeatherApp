import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCurrentWeather, setTwoDaysWeather, setWeekWeather } from '@redux/actions';
import { notify, weatherMappedInfo } from '@common/utils';
import { NotifyErrors } from '@common/enums';
import { useGetWeather } from '../services/endpoints';
import { resetPlaceData } from '../redux/actions/placeActions';

interface HydrateWeatherStore {
	(rehydrate?: boolean): {
		isError: boolean;
		isLoading: boolean;
	};
}

export const useHydrateWeatherStore: HydrateWeatherStore = (rehydrate) => {
	const dispatch = useDispatch();

	const [geoError, setGeoError] = useState<string>('');

	const { isError: isWeatherError, isLoading, requestData: weatherRequestData, data: weatherData } = useGetWeather();

	const handleSuccess = async (position: { coords: { latitude: number; longitude: number } }) => {
		const { latitude: lat, longitude: lon } = position.coords;

		weatherRequestData({
			params: {
				appid: process.env.REACT_APP_OPENWEATHER_KEY,
				lat,
				lon,
				minutely: ['minutely', 'alerts']
			}
		});
	};
	const handleError = (currentError: { message: string; code: number }) => {
		setGeoError(currentError.message);

		if (currentError.code === 1) return notify('Error: Access is denied!');
		if (currentError.code === 2) return notify('Error: Position is unavailable!');
		return notify(NotifyErrors.occasionalError);
	};

	useEffect(() => {
		if (navigator.geolocation) navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rehydrate]);

	useEffect(() => {
		if (isWeatherError) notify(NotifyErrors.occasionalError);

		if (!isWeatherError && weatherData?.status === 200) {
			const { current, twoDays, week } = weatherMappedInfo(weatherData.data);

			dispatch(setCurrentWeather(current));
			dispatch(setWeekWeather(week));
			dispatch(setTwoDaysWeather(twoDays));
			dispatch(resetPlaceData());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isWeatherError, weatherData]);

	return { isError: isWeatherError || !!geoError, isLoading };
};
