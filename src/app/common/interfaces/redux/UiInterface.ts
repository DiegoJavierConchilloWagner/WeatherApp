import { ThemeModeType, TemperatureUnitType, ForecastModeType } from '@common/types';

export interface UiInterface {
	themeMode: ThemeModeType;
	temperatureUnit: TemperatureUnitType;
	forecast: ForecastModeType;
}
