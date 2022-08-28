import { UiInterface } from '@common/interfaces/redux/UiInterface'
import { ActionType, ForecastMode, TemperatureUnit, ThemeModes, Types } from '../types/types'

const initialState: UiInterface = {
	themeMode: ThemeModes.DARK,
	temperatureUnit: TemperatureUnit.CEL,
	forecast: ForecastMode.DAYS
}

export const uiReducer = (state = initialState, action = {} as ActionType) => {
	switch (action.type) {
		case Types.setThemeMode:
			return {
				...state,
				themeMode: action.payload
			}
		case Types.setTemperatureUnit:
			return {
				...state,
				temperatureUnit: action.payload
			}
		case Types.setForecast:
			return {
				...state,
				forecast: action.payload
			}
		default:
			return state
	}
}
