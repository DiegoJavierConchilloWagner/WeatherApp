export function kelvinToCelcius(num: number) {
	return Math.round(num - 273.15);
}

export function celciusToFahrenheit(c: number) {
	return Math.round(c * (9 / 5) + 32);
}
