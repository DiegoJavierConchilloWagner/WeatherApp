import { IPlaceMapped, Types } from '@common/index';

export const setSelectedPlace = (data: IPlaceMapped) => ({
	type: Types.setSelectedPlace,
	payload: data
});
