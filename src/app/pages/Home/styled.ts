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
`;
