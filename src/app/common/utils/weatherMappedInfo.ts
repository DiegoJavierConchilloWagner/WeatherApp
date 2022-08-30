import { ICurrentMapped, IWeatherResponse, IWeekMapped } from '@common/index';
import { ITwoDays, ITwoDaysMapped, IWeek } from '@common/interfaces';

export const weatherMappedInfo = (data: IWeatherResponse) => {
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
	} = data;

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
		twoDays,
		week
	};
};
