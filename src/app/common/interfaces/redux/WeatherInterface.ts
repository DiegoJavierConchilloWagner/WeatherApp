export interface WeatherInterface {
	current: ICurrentMapped
	twoDays: ITwoDaysMapped[]
	week: IWeekMapped[]
}

export interface ICurrentMapped {
	dt: number
	feelsLike: number
	humidity: number
	temp: number
	description: string
	id: number
	main: string
	icon: string
}

export interface ITwoDaysMapped {
	dt: number
	feelsLike: number
	temp: number
	description: string
	id: number
	main: string
	icon: string
}

export interface IWeekMapped {
	dt: number
	feelsLike: number
	tempMin: number
	tempMax: number
	description: string
	id: number
	main: string
	icon: string
}

export interface IWeatherResponse {
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
	current: ICurrent
	minutely: Minutely[]
	hourly: ITwoDays[]
	daily: IWeek[]
}

export interface ICurrent {
	dt: number
	sunrise: number
	sunset: number
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: Weather[]
}

export interface ITwoDays {
	dt: number
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: Weather2[]
	pop: number
}

export interface IWeek {
	dt: number
	sunrise: number
	sunset: number
	moonrise: number
	moonset: number
	moon_phase: number
	temp: Temp
	feels_like: FeelsLike
	pressure: number
	humidity: number
	dew_point: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: Weather3[]
	clouds: number
	pop: number
	rain?: number
	uvi: number
}

export interface Weather {
	id: number
	main: string
	description: string
	icon: string
}

export interface Weather2 {
	id: number
	main: string
	description: string
	icon: string
}

export interface Weather3 {
	id: number
	main: string
	description: string
	icon: string
}

export interface Minutely {
	dt: number
	precipitation: number
}

export interface Temp {
	day: number
	min: number
	max: number
	night: number
	eve: number
	morn: number
}

export interface FeelsLike {
	day: number
	night: number
	eve: number
	morn: number
}
