import moment from 'moment';
import {selectFilteredExpenses, selectExpensesTotal} from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

describe('selectFilteredExpenses should work correctly', () => {
    it('should filter by text value', () => {
        const filters = {
            text: 'e',
        };
        const result = selectFilteredExpenses(expenses, filters);
        expect(result.length).toBe(2);
        expect(result).toContain(expenses[1]);
        expect(result).toContain(expenses[2]);
    });

    it('should filter by start date', () => {
        const filters = {
            startDate: moment(0),
        };
        const result = selectFilteredExpenses(expenses, filters);
        expect(result.length).toBe(2);
        expect(result).toContain(expenses[0]);
        expect(result).toContain(expenses[2]);
    });

    it('should filter by end date', () => {
        const filters = {
            endDate: moment(0),
        };
        const result = selectFilteredExpenses(expenses, filters);
        expect(result.length).toBe(2);
        expect(result).toContain(expenses[0]);
        expect(result).toContain(expenses[1]);
    });

    it('should sort by date', () => {
        const filters = {
            sortBy: 'date',
        };
        const result = selectFilteredExpenses(expenses, filters);
        expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
    });

    it('should sort by amount', () => {
        const filters = {
            sortBy: 'amount',
        };
        const result = selectFilteredExpenses(expenses, filters);
        expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
    });

    it('should filter nothing and sort nothing', () => {
        const result = selectFilteredExpenses(expenses, {});
        expect(result).toEqual([...expenses]);
    });
});

describe('selectExpensesTotal should work correctly', () => {
    it('should return 0 if no expenses', () => {
        const total = selectExpensesTotal([]);
        expect(total).toBe(0);
    });
    it('should correctly add up a single expense', () => {
        const total = selectExpensesTotal([expenses[0]]);
        expect(total).toBe(expenses[0].amount);
    });
    it('should correctly add up multiple expenses', () => {
        const total = selectExpensesTotal([expenses[0], expenses[1], expenses[2]]);
        expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
    });
});