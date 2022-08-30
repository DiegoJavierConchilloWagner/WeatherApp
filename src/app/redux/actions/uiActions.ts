import { ThemeModeType, TemperatureUnitType, ForecastModeType, Types } from '@common/index';

export const setThemeMode = (data: ThemeModeType) => ({
	type: Types.setThemeMode,
	payload: data
});

export const setCurrentTemperatureUnit = (data: TemperatureUnitType) => ({
	type: Types.setTemperatureUnit,
	payload: data
});

export const setForecast = (data: ForecastModeType) => ({
	type: Types.setForecast,
	payload: data
});

export const setIsCurrentWeatherLoading = (data: boolean) => ({
	type: Types.setIsCurrentWeatherLoading,
	payload: data
});
