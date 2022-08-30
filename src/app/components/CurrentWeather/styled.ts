import styled from 'styled-components';

export const StyledCurrentWeather = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	height: fit-content;
	margin: 0 10vw;
	color: ${({ theme }) => theme.colors.typography.primary};
	font-family: ${({ theme }) => theme.fonts.primary};
	gap: 2rem;

	@media (max-width: 768px) {
		margin: 3rem 10vw;
		gap: 2rem;
	}
`;

export const InfoContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: baseline;
	gap: 3rem;

	@media (max-width: 768px) {
		gap: 1.5rem;
		flex-direction: row;
		align-items: center;
	}

	h3 {
		font-size: 2rem;
		font-weight: 600;

		@media (max-width: 768px) {
			font-size: 1.5rem;
		}
	}
`;

export const InfoBLock = styled.div`
	h1 {
		font-weight: 700;
		font-size: 2.5rem;

		@media (max-width: 768px) {
			font-size: 2rem;
		}
	}
	p {
		margin-top: 0px;
		font-weight: 500;

		@media (max-width: 768px) {
			font-size: 0.8rem;
		}
	}
`;

export const WeatherContainer = styled.div`
	display: flex;
	width: 20rem;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (max-width: 768px) {
		justify-content: center;
		gap: 0.2rem;
	}

	p {
		align-self: center;
		font-weight: 700;
		border: 1px solid white;
		border-top-right-radius: 40px;
		border-bottom-left-radius: 40px;
		width: 7rem;
		text-align: center;
	}

	h5 {
		font-size: 1.2rem;
		font-weight: 400;
	}
`;

export const TemperatureContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	div {
		margin-right: 0rem;

		@media (max-width: 768px) {
			margin-right: 0%;
			align-items: center;
		}

		h4 {
			span {
				font-weight: 400;
				font-size: 1.2rem;

				@media (max-width: 768px) {
					font-size: 1rem;
				}
			}
			font-weight: 600;
			font-size: 1.5rem;

			@media (max-width: 768px) {
				font-size: 1.2rem;
			}
		}

		h5 {
			font-weight: 400;
			font-size: 1.2rem;
			text-align: center;

			@media (max-width: 768px) {
				font-size: 1.5rem;
			}

			span {
				font-weight: 400;
				font-size: 1.2rem;

				@media (max-width: 768px) {
					font-size: 1rem;
				}
			}
		}
	}
`;
