import { IPlace, IPlaceMapped } from '@common/interfaces/components/PlacesInterface';

export const mappedPlaces = (places: IPlace[]): IPlaceMapped[] => {
	return places.map((place: IPlace) => ({
		id: place.id,
		name: place.place_name,
		lng: place.center[0],
		lat: place.center[1]
	}));
};
