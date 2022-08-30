import styled from 'styled-components';

export const StyledSearchBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 768px) {
		height: 7vh;
		margin-top: 4rem;
	}
`;

export const StyledInput = styled.div<{ active: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50vw;
	@media (max-width: 768px) {
		width: 100vw;
	}
	margin: 2rem;
	#searchIcon {
		position: absolute;
		z-index: 1;
		left: 26%;
		top: 2.7rem;

		@media (max-width: 768px) {
			top: 4.9rem;
			left: 13%;
		}
	}
	input {
		border-color: transparent;
		padding: 0.7rem;
		padding-left: 4rem;
		background-color: transparent;
		font-family: ${({ theme }) => theme.fonts.primary};
		font-size: 1.3rem;
		width: 100%;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(2px);
		border-radius: 3rem;
		color: ${({ theme }) => theme.colors.typography.primary};
		transition: 0.4s;

		::placeholder {
			color: ${({ theme }) => theme.colors.placeholder.color};
		}
		:focus {
			${({ active }) =>
				active &&
				`
			background: blue;
			outline: none;
			opacity: 0.85;
			border-bottom-right-radius: 0px;
			border-bottom-left-radius: 0px;
        `}
			color: ${({ theme }) => theme.colors.typography.primary};
			background: ${({ theme }) => theme.colors.background.color};

			::-webkit-input-placeholder {
				color: grey;
				transition: 1s ease-in-out;
			}
		}
	}
`;

export const StyledSuggestions = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background: ${({ theme }) => theme.colors.background.color};
	width: 50vw;
	top: 5.6rem;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;
	overflow: hidden;
	z-index: 2;
	opacity: 0.85;

	@media (max-width: 768px) {
		width: 82vw;
		top: 7.4rem;
	}
`;

export const StyledSuggestion = styled.a`
	color: ${({ theme }) => theme.colors.typography.primary};
	font-family: ${({ theme }) => theme.fonts.primary};
	text-decoration: none;
	padding: 1rem 1rem;
	text-align: left;
	font-size: 1.2rem;
	display: inline-block;
	position: relative;

	@media (max-width: 768px) {
		font-size: 0.9rem;
		font-weight: 500;
		text-align: center;
		:not(:last-child) {
			border-bottom: 1px solid ${({ theme }) => theme.colors.typography.primary};
		}
	}
	cursor: pointer;
	:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: ${({ theme }) => theme.colors.typography.primary};
		transform-origin: bottom right;
		transition: transform 0.5s ease-out;
	}
	:hover:after,
	:focus:after {
		transform: scaleX(1);
		transform-origin: bottom left;
		outline: none;
	}
`;
