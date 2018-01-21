import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses'
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';

let wrapper, onRemoveConfirm, onRemoveCancel;

beforeEach(() => {
    const expense = expenses[0];
    onRemoveConfirm = jest.fn();
    onRemoveCancel = jest.fn();
    wrapper = shallow(
        <DeleteConfirmationModal
            isOpen={true}
            expense={expense}
            onRemoveConfirm={onRemoveConfirm}
            onRemoveCancel={onRemoveCancel}
        />,
    );
});

it('should render DeleteConfirmationModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should do onRemoveConfirm after clicking confirm', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(onRemoveConfirm).toHaveBeenCalled();
});

it('should do onRemoveCancel after clicking cancel', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(onRemoveCancel).toHaveBeenCalled();
});