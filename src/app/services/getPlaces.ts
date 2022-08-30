import axios from 'axios';
import { IPlaceMapped, IPlace } from '../common/interfaces/components/PlacesInterface';

const paramsMapbox = {
	access_token: process.env.REACT_APP_MAPBOX_KEY,
	limit: 5,
	language: 'en'
};

export const getPlaces = async (searchTerm = '') => {
	try {
		const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json`, {
			params: paramsMapbox
		});
		const array: IPlaceMapped[] = resp.data.features.map((place: IPlace) => ({
			id: place.id,
			name: place.place_name,
			lng: place.center[0],
			lat: place.center[1]
		}));
		return array;
	} catch (error) {
		return [];
	}
};
