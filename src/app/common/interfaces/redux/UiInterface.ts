export type ThemeMode = string | 'LIGHT' | 'DARK'

export type TemperatureUnit = string | '° F' | '° C' | '° K'

export type ForecastMode = string | 'DAYS' | 'HOUR'

export interface UiInterface {
	themeMode: ThemeMode
	temperatureUnit: TemperatureUnit
	forecast: ForecastMode
}
