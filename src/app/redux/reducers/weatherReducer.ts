import { WeatherInterface } from '@common/interfaces/redux/WeatherInterface'
import { ActionType, Types } from '../types/types'

const initialState: WeatherInterface = {
	current: {
		dt: 0,
		feelsLike: 0,
		humidity: 0,
		temp: 0,
		description: '',
		id: 200,
		main: '',
		icon: ''
	},
	twoDays: [
		{
			dt: 0,
			feelsLike: 0,
			temp: 0,
			description: '',
			id: 0,
			main: '',
			icon: ''
		}
	],
	week: [
		{
			dt: 0,
			feelsLike: 0,
			tempMin: 0,
			tempMax: 0,
			description: '',
			id: 0,
			main: '',
			icon: ''
		}
	]
}

export const weatherReducer = (state = initialState, action = {} as ActionType) => {
	switch (action.type) {
		case Types.setCurrentWeather:
			return {
				...state,
				current: action.payload
			}
		case Types.setTwoDaysWeather:
			return {
				...state,
				twoDays: action.payload
			}
		case Types.setWeekWeather:
			return {
				...state,
				week: action.payload
			}
		default:
			return state
	}
}
