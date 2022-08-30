import { StyledLoader } from './styled';

export const Loader = () => {
	return (
		<StyledLoader className='lds-ellipsis'>
			<div />
			<div />
			<div />
			<div />
		</StyledLoader>
	);
};
