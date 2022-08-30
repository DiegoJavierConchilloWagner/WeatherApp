import { ToastContainer } from 'react-toastify';

export const Toast = () => {
	return (
		<ToastContainer
			position='top-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			limit={3}
			theme='dark'
		/>
	);
};
