import { PlaceInterface, ActionType, Types } from '@common/index';

const initialState: PlaceInterface = {
	selectedPlace: {
		name: '',
		id: '',
		lat: 0,
		lng: 0
	}
};

export const placeReducer = (state = initialState, action = {} as ActionType) => {
	switch (action.type) {
		case Types.setSelectedPlace:
			return {
				selectedPlace: action.payload
			};
		default:
			return state;
	}
};
