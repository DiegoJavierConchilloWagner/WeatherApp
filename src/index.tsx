import { StrictMode } from 'react';

import { store } from '@redux/store/store';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
