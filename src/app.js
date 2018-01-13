import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';

import 'normalize.css/normalize.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({amount: 4500, description: 'Water Bill'}));
store.dispatch(addExpense({amount: 0, description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({amount: 109500, description: 'Rent'}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
