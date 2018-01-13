import moment from 'moment';
import {getVisibleExpenses} from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

it('should filter by text value', () => {
    const filters = {
        text: 'e',
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result.length).toBe(2);
    expect(result).toContain(expenses[1]);
    expect(result).toContain(expenses[2]);
});

it('should filter by start date', () => {
    const filters = {
        startDate: moment(0),
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result.length).toBe(2);
    expect(result).toContain(expenses[0]);
    expect(result).toContain(expenses[2]);
});

it('should filter by end date', () => {
    const filters = {
        endDate: moment(0),
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result.length).toBe(2);
    expect(result).toContain(expenses[0]);
    expect(result).toContain(expenses[1]);
});

it('should sort by date', () => {
    const filters = {
        sortBy: 'date',
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

it('should sort by amount', () => {
    const filters = {
        sortBy: 'amount',
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

it('should filter nothing and sort nothing', () => {
    const result = getVisibleExpenses(expenses, {});
    expect(result).toEqual([...expenses]);
});