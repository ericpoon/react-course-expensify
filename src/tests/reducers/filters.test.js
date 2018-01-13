import moment from 'moment';
import filtersReducer from '../../reducers/filters';

it('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

it('should set sortBy to amount', () => {
    const state = filtersReducer({}, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
    const state = filtersReducer({}, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

it('should set text filter', () => {
    const state = filtersReducer({}, {type: 'SET_TEXT_FILTER', text: 'rent'});
    expect(state.text).toBe('rent');
});

it('should set startDate filter', () => {
    const state = filtersReducer({}, {type: 'SET_START_DATE', startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

it('should set endDate filter', () => {
    const state = filtersReducer({}, {type: 'SET_END_DATE', endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0));
});