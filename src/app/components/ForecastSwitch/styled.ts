import styled from 'styled-components';

export const SwitchContainer = styled.div`
	margin-top: 2rem;
	text-align: center;

	@media (max-width: 768px) {
		text-align: center;
		margin-top: 1rem;
	}
`;

export const StyledSpan = styled.span`
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
`;
