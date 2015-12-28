import { createStore, combineReducers, applyMiddleware } from 'redux';
import delayMiddleware from 'middleware/DelayMiddleware';
import clickReducer from 'component/CountButton/reducer';

let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);

let reducers = combineReducers({
    clickState: clickReducer
});

export default createStoreWithMiddleware(reducers);
