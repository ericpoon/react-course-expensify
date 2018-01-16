import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );

    return store;
}

