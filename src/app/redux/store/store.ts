import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { uiReducer, placeReducer, weatherReducer } from '@redux/reducers';
import thunk from 'redux-thunk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	uiInterface: uiReducer,
	placeInterface: placeReducer,
	WeatherInterface: weatherReducer
});

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
