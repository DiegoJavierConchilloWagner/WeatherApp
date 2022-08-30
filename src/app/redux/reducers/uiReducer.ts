import { ThemeModes, TemperatureUnit, ForecastMode, UiInterface, ActionType, Types } from '@common/index';

const initialState: UiInterface = {
	themeMode: ThemeModes.DARK,
	temperatureUnit: TemperatureUnit.CEL,
	forecast: ForecastMode.DAYS,
	isCurrentWeatherLoading: false
};

export const uiReducer = (state = initialState, action = {} as ActionType) => {
	switch (action.type) {
		case Types.setThemeMode:
			return {
				...state,
				themeMode: action.payload
			};
		case Types.setTemperatureUnit:
			return {
				...state,
				temperatureUnit: action.payload
			};
		case Types.setForecast:
			return {
				...state,
				forecast: action.payload
			};

		case Types.setIsCurrentWeatherLoading:
			return {
				...state,
				isCurrentWeatherLoading: action.payload
			};

		default:
			return state;
	}
};
