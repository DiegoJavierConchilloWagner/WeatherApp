import { useSelector } from 'react-redux';

import { CurrentWeather } from '@components/CurrentWeather/CurrentWeather';
import { ForecastSwitch } from '@components/ForecastSwitch/ForecastSwitch';
import { ForecastTwoDays } from '@components/ForecastHours/ForecastTwoDays/ForecastTwoDays';
import { ForecastWeek } from '@components/ForecastWeek/ForecastWeek/ForecastWeek';

import { Welcome } from '@components/Welcome/Welcome';
import { RootState } from '@redux/store/store';

import { Layout } from '@components/ui/layout/Layout';
import { StyledHome } from './styled';

export const Home = () => {
	const { selectedPlace } = useSelector((state: RootState) => state.placeInterface);
	const { forecast } = useSelector((state: RootState) => state.uiInterface);
	console.log(selectedPlace.name);
	return (
		<StyledHome>
			<Layout>
				{/* {selectedPlace.name !== '' ? (
					<>
						<CurrentWeather />
						<div>
							<ForecastSwitch />
							{forecast === 'DAYS' ? <ForecastWeek /> : <ForecastTwoDays />}
						</div>
					</>
				) : (
					<Welcome />
				)} */}
			</Layout>
		</StyledHome>
	);
};
