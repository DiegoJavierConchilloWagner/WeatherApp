import { useCallAPI } from './useCallApi';

export const useGetPlaces = (term: string) =>
	useCallAPI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json`, {
		config: {
			method: 'get',
			params: {
				access_token: process.env.REACT_APP_MAPBOX_KEY,
				limit: 5,
				language: 'en'
			}
		}
	});

export const useGetWeather = () =>
	useCallAPI('https://api.openweathermap.org/data/2.5/onecall', {
		config: {
			method: 'get'
		}
	});
