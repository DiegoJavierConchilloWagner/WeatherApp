/* eslint-disable react/require-default-props */
import { GeolocationIcon } from '@components/GeolocationIcon/GeolocationIcon';
import { SearchBox } from '@components/SearchBox/SearchBox/SearchBox';
import { ThemeToggle } from '@components/ThemeToggle/ThemeToggle';
import { FC, ReactNode } from 'react';

interface Props {
	// title: string;
	// description?: string;
	// keywords?: string;
	navbar?: boolean;
	children: ReactNode;
	rehydrateHandler: () => void;
}

export const Layout: FC<Props> = ({
	children,
	navbar = true,
	rehydrateHandler
	// title, description, keywords,
}) => {
	return (
		<>
			{/* <Head> */}
			{/* <title>{title}</title>
				<meta name='author' content='Diego Wagner' />
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} /> */}

			{/* Graph meta tags */}
			{/* <meta property='og:title' content={`Informacion sobre ${title}`} />
				<meta property='og:description' content={`Esta es la pagina sobre ${title}`} />
				<meta property='og:image' content={`${origin}/images/banner.png`} /> */}
			{/* </Head> */}

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
