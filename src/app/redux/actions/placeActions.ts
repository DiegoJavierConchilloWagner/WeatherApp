import { IPlaceMapped, Types } from '@common/index';

export const setSelectedPlace = (data: IPlaceMapped) => ({
	type: Types.setSelectedPlace,
	payload: data
});

export const resetPlaceData = () => ({
	type: Types.resetPlaceData
	// payload: data
});
