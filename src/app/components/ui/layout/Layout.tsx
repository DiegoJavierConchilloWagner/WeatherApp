/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { GeolocationIcon } from '@components/GeolocationIcon/GeolocationIcon';
import { SearchBox } from '@components/SearchBox/SearchBox/SearchBox';
import { ThemeToggle } from '@components/ThemeToggle/ThemeToggle';
import { RootState } from '@redux/store/store';

interface Props {
	navbar?: boolean;
	children: ReactNode;
	rehydrateHandler: () => void;
}

export const Layout: FC<Props> = ({ children, navbar = true, rehydrateHandler }) => {
	const {
		selectedPlace: { name }
	} = useSelector((state: RootState) => state.placeInterface);

	return (
		<>
			{/* <Head> */}
			<Helmet>
				<title>WeatherApp {name ? `- ${name}` : '- Curent Location'}</title>
			</Helmet>

			{navbar && (
				<header>
					<SearchBox />
					<ThemeToggle />
					<GeolocationIcon rehydrateHandler={rehydrateHandler} />
				</header>
			)}

			<main>{children}</main>
		</>
	);
};
