import styled from 'styled-components';

export const StyledHome = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: column;
	@media (max-width: 768px) {
		gap: 0.5rem;
	}
	hr {
		margin: 0 auto 0 auto;
		width: 60%;
	}
	div {
		#switch {
			margin-top: 2rem;
			text-align: center;

			@media (max-width: 768px) {
				text-align: center;
				margin-top: 1rem;
			}

			#forecast {
				width: 20rem;
				color: ${({ theme }) => theme.colors.typography.primary};
				font-family: ${({ theme }) => theme.fonts.primary};
				font-weight: 400;
				font-size: 1.2rem;
				text-align: center;
				margin-right: 1rem;

				@media (max-width: 768px) {
					font-size: 1rem;
				}
			}
		}
	}
`;
