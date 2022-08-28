/* eslint-disable no-shadow */
export type ActionType = {
	type: string
	payload: string
}

export enum Types {
	/*
	 *  UiInterface
	 */
	setThemeMode = '[UI] Set theme mode',
	setTemperatureUnit = '[UI] Set temperature unit',
	/*
	 *  SelectedPlaceInteface
	 */
	setSelectedPlace = '[Pl] Set selected place',
	/*
	 *  WeatherInterface
	 */
	setCurrentWeather = '[WT] Set current weather',
	setTwoDaysWeather = '[WT] Set two days weather',
	setWeekWeather = '[WT] Set week weather',
	setForecast = '[WT] Set Forecast'
}

export enum ThemeModes {
	LIGHT = 'LIGHT',
	DARK = 'DARK'
}

export enum TemperatureUnit {
	FAR = '° F',
	CEL = '° C',
	KEL = '° K'
}

export enum ForecastMode {
	DAYS = 'DAYS',
	HOUR = 'HOUR'
}
