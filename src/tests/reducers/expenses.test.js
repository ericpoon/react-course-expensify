import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

it('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

it('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

it('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

it('should add an expense', () => {
    const expense = {
        id: '1001',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000,
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

it('should edit an expense', () => {
    const amount = 122999;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount,
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

it('should not edit expenses if id not found', () => {
    const amount = 122999;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount,
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});