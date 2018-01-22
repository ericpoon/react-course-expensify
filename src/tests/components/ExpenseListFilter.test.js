import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper,
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
  />);
});

it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

it('should handle text change', () => {
  const newFilterText = 'new filter text';
  wrapper.find('input').at(0).simulate('change', { target: { value: newFilterText } });
  expect(setTextFilter).toHaveBeenLastCalledWith(newFilterText);
});
it('should handle sort by date', () => {
  wrapper.setProps({ filters: altFilters }); // sort by amount by default
  wrapper.find('select').simulate('change', { target: { value: 'date' } });
  expect(sortByDate).toHaveBeenCalledTimes(1);
});
it('should handle sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});
it('should handle handle dates change', () => {
  const dates = { startDate: 12300, endDate: 45600 };
  wrapper.find(DateRangePicker).prop('onDatesChange')(dates);
  expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});
it('should handle calendar focus change', () => {
  const focused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(focused);
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
