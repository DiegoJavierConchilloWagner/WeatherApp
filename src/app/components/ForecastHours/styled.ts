import styled from 'styled-components';

export const StyledForecastTwoDays = styled.div`
	display: flex;
	margin: 3rem 10vw;

	@media (min-width: 768px) {
		overflow: auto;
		scroll-snap-type: x mandatory;

		::-webkit-scrollbar {
			height: 7px;
			width: 2px;
			background: ${({ theme }) => theme.colors.background.color};
		}

		::-webkit-scrollbar-thumb:horizontal {
			background: #83c2da;
			border-radius: 25px;
		}
	}

	@media (max-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		flex-grow: 1;
		justify-content: center;
		gap: 0%;
	}

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(0px);
	-webkit-backdrop-filter: blur(0px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyledForecastedHour = styled.div`
	position: relative;
	scroll-snap-align: start;
	padding: 1.2rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.typography.primary};
	font-family: ${({ theme }) => theme.fonts.primary};
	text-align: center;

	h4 {
		font-weight: 400;
	}

	h5 {
		font-weight: 500;
	}

	@media (max-width: 768px) {
		border-bottom: 1px solid white;
	}

	p {
		position: absolute;
		z-index: 1;
		font-weight: 700;
		top: 0px;
	}
`;
