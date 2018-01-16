import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

it('should setup remove expense action object', () => {
    const action = removeExpense('abc123');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123',
    });

});

it('should setup edit expense action object', () => {
    const action = editExpense('abc123', {
        description: 'description',
        note: 'note',
        amount: 123,
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'description',
            note: 'note',
            amount: 123,
        },
    });
});

it('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2],
    });
});

it('should add expense to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 80,
        note: 'This one is better',
        createdAt: 1000,
    };

    expect.assertions(2);

    return store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData,
                },
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData);
        });
});

it('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    };

    expect.assertions(2);

    return store.dispatch(startAddExpense())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults,
                },
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseDefaults);
        });
});

// it('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//         },
//     });
// });