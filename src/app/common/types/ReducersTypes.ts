export type ActionType = {
	type: string;
	payload: string;
};

// eslint-disable-next-line no-shadow
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

/*
 *  UiInterface
 */
export type ThemeModeType = string | 'LIGHT' | 'DARK';

export type TemperatureUnitType = string | '° F' | '° C' | '° K';

export type ForecastModeType = string | 'DAYS' | 'HOUR';
