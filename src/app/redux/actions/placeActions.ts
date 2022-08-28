import { IPlaceMapped } from '@common/interfaces/components/PlacesInterface'
import { Types } from '../types/types'

export const setSelectedPlace = (data: IPlaceMapped) => ({
	type: Types.setSelectedPlace,
	payload: data
})
