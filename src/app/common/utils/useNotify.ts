import { toast } from 'react-toastify';

export const notify = (text: string) =>
	toast.error(text, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined
	});
