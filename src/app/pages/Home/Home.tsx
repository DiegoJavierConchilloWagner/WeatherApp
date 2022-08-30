import { useSelector } from 'react-redux';

import { CurrentWeather } from '@components/CurrentWeather/CurrentWeather';
import { ForecastSwitch } from '@components/ForecastSwitch/ForecastSwitch';
import { ForecastTwoDays } from '@components/ForecastHours/ForecastTwoDays/ForecastTwoDays';
import { ForecastWeek } from '@components/ForecastWeek/ForecastWeek/ForecastWeek';

import { RootState } from '@redux/store/store';

import { Layout } from '@components/ui/layout/Layout';
import { useHydrateWeatherStore } from '@hooks/useHydrateWeatherStore';
import { useState } from 'react';
import { StyledHome } from './styled';

export const Home = () => {
	const { forecast } = useSelector((state: RootState) => state.uiInterface);
	const [rehydrate, setRehydrate] = useState<boolean>(false);
	const { isError, isLoading } = useHydrateWeatherStore(rehydrate);

	const rehydrateHandler = () => setRehydrate((prev) => !prev);

	return (
		<StyledHome>
			<Layout rehydrateHandler={rehydrateHandler}>
				<CurrentWeather isLoading={isLoading} isError={isError} />

				{!isError && <ForecastSwitch />}

				{forecast === 'DAYS' ? (
					<ForecastWeek isLoading={isLoading} />
				) : (
					<ForecastTwoDays isLoading={isLoading} />
				)}
			</Layout>
		</StyledHome>
	);
};
