import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { placeReducer } from '../reducers/placeReducer'
import { uiReducer } from '../reducers/uiReducer'
import { weatherReducer } from '../reducers/weatherReducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
	uiInterface: uiReducer,
	placeInterface: placeReducer,
	WeatherInterface: weatherReducer
})

export type RootState = ReturnType<typeof reducers>

export type AppDispatch = typeof store.dispatch

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
