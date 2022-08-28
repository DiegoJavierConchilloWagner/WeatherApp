/* eslint-disable no-undef */
import { PlaceInterface } from '@common/interfaces/redux/PlaceInterface'
import { ActionType, Types } from '../types/types'

const initialState: PlaceInterface = {
	selectedPlace: {
		name: '',
		id: '',
		lat: 0,
		lng: 0
	}
}

export const placeReducer = (state = initialState, action = {} as ActionType) => {
	switch (action.type) {
		case Types.setSelectedPlace:
			return {
				selectedPlace: action.payload
			}
		default:
			return state
	}
}
