import { useEffect, useState, useRef, KeyboardEvent, FC } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { IoSearchOutline } from 'react-icons/io5';

import { IPlaceMapped } from '@common/interfaces';
import {
	setSelectedPlace,
	setCurrentWeather,
	setWeekWeather,
	setTwoDaysWeather,
	setIsCurrentWeatherLoading
} from '@redux/actions';
import { RootState } from '@redux/store/store';
import { useGetPlaces, useGetWeather } from '@services/endpoints';
import { mappedPlaces, notify, weatherMappedInfo } from '@common/utils';
import { NotifyErrors } from '@common/enums';
import { useOnClickOutside, useDebounce } from '@hooks/index';

import { StyledSearchBox, StyledInput } from '../styled';
import { SuggestionList } from '../SuggestionList/SuggestionList';

export const SearchBox: FC = () => {
	const dispatch = useDispatch();

	const boxRef = useRef(null);
	const [search, setSearch] = useState<string>('');
	const [focusedInput, setFocusedInput] = useState<boolean>(false);

	const [suggestions, setSuggestions] = useState<IPlaceMapped[]>([]);
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

	const debouncedSearchValue = useDebounce<string>(search, 250);
	const { selectedPlace } = useSelector((state: RootState) => state.placeInterface);
	const isValidTerm: boolean = search.trim() !== '' && search.trim().length >= 1;
	const isValidSuggestion = !!suggestions.length;
	const placeHolder: string = selectedPlace.name !== '' ? selectedPlace.name : 'Search for a place here';

	const {
		isError: isPlacesError,
		// isLoading: isPlacesLoading,
		requestData: placesRequestData,
		data: placesData
	} = useGetPlaces(search);

	const {
		isError: isWeatherError,
		isLoading: isWeatherLoading,
		requestData: weatherRequestData,
		data: weatherData
	} = useGetWeather();

	const handleInputClick = (): void => {
		if (!focusedInput) {
			setSearch('');
			setFocusedInput(true);
			setSuggestions([]);
		}
	};

	const handleClickOutside = (): void => {
		setShowSuggestions(false);
		setFocusedInput(false);
	};
	useOnClickOutside(boxRef, handleClickOutside);

	const handleSuggestionClick = (suggestion: IPlaceMapped) => {
		weatherRequestData({
			params: {
				appid: process.env.REACT_APP_OPENWEATHER_KEY,
				lat: suggestion.lat,
				lon: suggestion.lng,
				minutely: ['minutely', 'alerts']
			}
		});
		dispatch(setSelectedPlace(suggestion));
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && !isValidTerm) return notify(NotifyErrors.term);

		if (e.key === 'Enter' && isValidTerm) {
			if (!isValidSuggestion) return notify(NotifyErrors.invalidTerm);

			dispatch(setSelectedPlace(suggestions[0]));

			weatherRequestData({
				params: {
					appid: process.env.REACT_APP_OPENWEATHER_KEY,
					lat: suggestions[0].lat,
					lon: suggestions[0].lng,
					minutely: ['minutely', 'alerts']
				}
			});
		}
		return false;
	};

	useEffect(() => {
		if (isValidTerm) {
			placesRequestData({});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchValue]);

	useEffect(() => {
		setSearch('');
		setShowSuggestions(false);
		setFocusedInput(false);
	}, [selectedPlace]);

	useEffect(() => {
		if (isPlacesError) notify(NotifyErrors.occasionalError);

		if (!isPlacesError && placesData?.status === 200) {
			const places = mappedPlaces(placesData.data.features);
			setShowSuggestions(true);
			setSuggestions(places);
		}
	}, [isPlacesError, placesData]);

	useEffect(() => {
		if (isWeatherError) {
			notify(NotifyErrors.occasionalError);
			dispatch(setIsCurrentWeatherLoading(false));
		}

		if (!isWeatherError && weatherData?.status === 200) {
			dispatch(setIsCurrentWeatherLoading(false));

			const { current, twoDays, week } = weatherMappedInfo(weatherData.data);

			dispatch(setCurrentWeather(current));
			dispatch(setWeekWeather(week));
			dispatch(setTwoDaysWeather(twoDays));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isWeatherError, weatherData]);

	useEffect(() => {
		if (isWeatherLoading) {
			dispatch(setIsCurrentWeatherLoading(true));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isWeatherLoading]);

	return (
		<StyledSearchBox>
			<StyledInput active={showSuggestions}>
				<IoSearchOutline id='searchIcon' size={35} color='white' />
				<input
					type='text'
					value={search}
					name='search'
					onClick={handleInputClick}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e)}
					onFocus={() => setFocusedInput(true)}
					autoComplete='off'
					placeholder={placeHolder}
				/>
			</StyledInput>
			{showSuggestions && (
				<SuggestionList
					boxRef={boxRef}
					suggestions={suggestions}
					handleClickOutside={handleClickOutside}
					handleSuggestionClick={handleSuggestionClick}
				/>
			)}
		</StyledSearchBox>
	);
};
