import styled from 'styled-components';

export const StyledForecastWeek = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 3rem 10vw;
	justify-content: center;
	gap: 2rem;
	@media (max-width: 768px) {
		gap: 0%;
	}
	::-webkit-scrollbar {
		height: 7px;
		width: 2px;
		background: ${({ theme }) => theme.colors.background.color};
	}
	::-webkit-scrollbar-thumb:horizontal {
		background: #83c2da;
		border-radius: 25px;
	}
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(0px);
	-webkit-backdrop-filter: blur(0px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyledForecastedDay = styled.div`
	scroll-snap-align: start;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.typography.primary};
	font-family: ${({ theme }) => theme.fonts.primary};
	text-align: center;

	@media (max-width: 768px) {
		:not(:last-child) {
			border-bottom: 1px solid white;
		}
	}

	h4 {
		font-weight: 400;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled.div`
	flex-direction: column;

	h5 {
		font-weight: 500;
		text-align: center;
	}
`;

export const TemperaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
