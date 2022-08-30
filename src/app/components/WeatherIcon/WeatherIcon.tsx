/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { FC, useEffect, useMemo, useState } from 'react';

import { iconsProvider } from '@common/index';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store/store';
import { Loader } from '../Loader/Loader';

interface Props {
	id: number;
	icon: string;
	size: number;
	isLoading: boolean;
	switcher?: boolean;
}

export const WeatherIcon: FC<Props> = ({ id, icon, size, isLoading, switcher = false }) => {
	const { isCurrentWeatherLoading } = useSelector((state: RootState) => state.uiInterface);
	const [image, setImage] = useState();
	const { day, night } = iconsProvider;

	const time = icon.slice(-1);

	const imageRenderer = useMemo(
		() => () => {
			if (time === 'n') {
				return setImage(
					require(`../../../assets/weather/${night[id as keyof typeof iconsProvider.night]}.svg`).default
				);
			}

			return setImage(
				require(`../../../assets/weather/${day[id as keyof typeof iconsProvider.day]}.svg`).default
			);
		},
		[day, id, night, time]
	);

	useEffect(() => {
		imageRenderer();
	}, [imageRenderer]);

	if (isCurrentWeatherLoading && !switcher) return <Loader />;

	return !isLoading ? <img src={image} alt='weather' width={size} height={size} /> : <Loader />;
};
