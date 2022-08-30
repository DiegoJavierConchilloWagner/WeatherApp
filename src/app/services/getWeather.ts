import axios from 'axios';
import {
	IWeatherResponse,
	ICurrentMapped,
	ITwoDays,
	ITwoDaysMapped,
	IWeek,
	IWeekMapped
} from '@common/interfaces/redux/WeatherInterface';

const paramsOpenWeather = {
	appid: process.env.REACT_APP_OPENWEATHER_KEY
};

export const getWeather = async (lat: number, lon: number) => {
	try {
		const resp = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
			params: { ...paramsOpenWeather, lat, lon, minutely: ['minutely', 'alerts'] }
		});
		const {
			current: {
				dt,
				feels_like: feelsLike,
				humidity,
				temp,
				weather: [{ description, id, main, icon }]
			},
			daily,
			hourly
		}: IWeatherResponse = resp.data;

		const current: ICurrentMapped = {
			dt,
			feelsLike,
			humidity,
			temp,
			description,
			id,
			main,
			icon
		};

		const week: IWeekMapped[] = daily.map((day: IWeek) => ({
			dt: day.dt,
			feelsLike: day.feels_like.day,
			tempMin: day.temp.min,
			tempMax: day.temp.max,
			description: day.weather[0].description,
			id: day.weather[0].id,
			main: day.weather[0].main,
			icon: day.weather[0].icon
		}));

		const twoDays: ITwoDaysMapped[] = hourly.map((hour: ITwoDays) => ({
			dt: hour.dt,
			feelsLike: hour.feels_like,
			temp: hour.temp,
			description: hour.weather[0].description,
			id: hour.weather[0].id,
			main: hour.weather[0].main,
			icon: hour.weather[0].icon
		}));

		return {
			current,
			week,
			twoDays
		};
	} catch (error) {
		// eslint-disable-next-line no-console
		return console.error(error);
	}
};
