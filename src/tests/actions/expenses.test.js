import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent.',
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        },
    });
});

it('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        },
    });
});