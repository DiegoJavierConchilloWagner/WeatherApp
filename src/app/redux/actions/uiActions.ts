import { ThemeMode } from '@common/interfaces/redux/UiInterface'
import { ForecastMode, TemperatureUnit, Types } from '../types/types'

export const setThemeMode = (data: ThemeMode) => ({
	type: Types.setThemeMode,
	payload: data
})

export const setCurrentTemperatureUnit = (data: TemperatureUnit) => ({
	type: Types.setTemperatureUnit,
	payload: data
})

export const setForecast = (data: ForecastMode) => ({
	type: Types.setForecast,
	payload: data
})
