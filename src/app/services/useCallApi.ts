import { useCallback, useReducer, useEffect } from 'react';

import { AxiosError, AxiosResponse } from 'axios';
import Axios from './axios';

interface FetchReducerState {
	isLoading: boolean;
	isError: boolean;
	data: AxiosResponse;
}

type FetchActionType =
	| { type: 'FETCH_INIT' }
	| { type: 'FETCH_SUCCESS'; payload: AxiosResponse }
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	| { type: 'FETCH_FAILURE'; payload: AxiosError | Error | any };

type FetchData = { [key: string]: object };

const dataFetchReducer = (state: FetchReducerState, action: FetchActionType) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false
			};
		case 'FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload
			};
		case 'FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
				data: action.payload
			};
		default:
			throw new Error();
	}
};

export const useCallAPI = (endpoint: string, { initialData = null, callOnLoad = false, config = {} } = {}) => {
	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: callOnLoad,
		isError: false,
		data: initialData
	});
	const fetchData = useCallback(
		async (requestInit?: FetchData) => {
			dispatch({ type: 'FETCH_INIT' });

			const axiosConfig = {
				url: endpoint,
				crossdomain: true,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				...config,
				...(requestInit || {})
			};
			try {
				const result = await Axios(axiosConfig);
				dispatch({ type: 'FETCH_SUCCESS', payload: result });
			} catch (error) {
				dispatch({ type: 'FETCH_FAILURE', payload: error });
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[endpoint]
	);

	useEffect(() => {
		if (callOnLoad) fetchData();
	}, [callOnLoad, fetchData]);

	return {
		...state,
		requestData: fetchData
	};
};
