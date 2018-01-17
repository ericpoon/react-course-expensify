import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../components/EditExpensePage';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[0]}
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />);
});

it('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should handle editExpense', () => {
    const expenseUpdates = {description: 'new description', amount: 1200};
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseUpdates);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenseUpdates);
});

it('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
});