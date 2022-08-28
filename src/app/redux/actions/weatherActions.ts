import { ICurrentMapped, ITwoDaysMapped, IWeekMapped } from '@common/interfaces/redux/WeatherInterface'
import { Types } from '../types/types'

export const setCurrentWeather = (data: ICurrentMapped) => ({
	type: Types.setCurrentWeather,
	payload: data
})

export const setTwoDaysWeather = (data: ITwoDaysMapped[]) => ({
	type: Types.setTwoDaysWeather,
	payload: data
})

export const setWeekWeather = (data: IWeekMapped[]) => ({
	type: Types.setWeekWeather,
	payload: data
})
