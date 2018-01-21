import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[0]}
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />);
});

it('should render EditExpensePage correctly', () => {
    expect(wrapper.state('isModalOpen')).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
});

it('should handle startEditExpense', () => {
    const expenseUpdates = {description: 'new description', amount: 1200};
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseUpdates);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenseUpdates);
});

it('should handle startRemoveExpense', () => {
    wrapper.find('DeleteConfirmationModal').prop('onRemoveConfirm')(expenses[0].id);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
});

it('should open confirmation modal after clicking removeExpense', () => {
    wrapper.find('div div button').simulate('click');
    expect(wrapper.state('isModalOpen')).toBeTruthy();
});