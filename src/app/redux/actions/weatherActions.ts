import { ICurrentMapped, ITwoDaysMapped, IWeekMapped, Types } from '@common/index';

export const setCurrentWeather = (data: ICurrentMapped) => ({
	type: Types.setCurrentWeather,
	payload: data
});

export const setTwoDaysWeather = (data: ITwoDaysMapped[]) => ({
	type: Types.setTwoDaysWeather,
	payload: data
});

export const setWeekWeather = (data: IWeekMapped[]) => ({
	type: Types.setWeekWeather,
	payload: data
});
