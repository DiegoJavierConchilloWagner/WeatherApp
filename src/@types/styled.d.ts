import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		fonts: {
			primary: string;
			secondary: string;
		};

		colors: {
			gradientBackground: {
				background: string;
				repeat: string;
			};

			placeholder: {
				color: string;
			};

			background: {
				color: string;
			};

			border: {
				color: string;
			};

			switch: {
				primary: string;
				secondary: string;
			};

			typography: {
				primary: string;
				secondary: string;
			};

			underline: {
				color: string;
			};

			inputs: {
				color: string;
			};
		};

		boxShadow: {
			color: string;
		};
	}
}
