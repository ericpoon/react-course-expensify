import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

it('should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseTotal={0} expenseCount={0}/>);
    expect(wrapper).toMatchSnapshot();
});

it('should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseTotal={1088.50} expenseCount={3}/>);
    expect(wrapper).toMatchSnapshot();
});