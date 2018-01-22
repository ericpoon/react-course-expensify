import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
  description = '', note = '', amount = 0, createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(), description, note, amount, createdAt,
  },
});
const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id,
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(s => s.id !== action.id);
    case 'EDIT_EXPENSE':
      const { description, note, amount } = action.updates;
      const updates = { description, note, amount };
      return state.map((s) => {
        if (s.id === action.id) return { ...s, ...updates };
        return s;
      });
    default:
      return state;
  }
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}));

const getVisibleExpenses = (expenses, {
  text, sortBy, startDate, endDate,
}) => expenses
  .filter((expense) => {
    const {
      createdAt, description, note, amount,
    } = expense;
    const startDateMatch = typeof startDate !== 'number' || createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || createdAt <= endDate;
    const textMatch = typeof text !== 'string' || description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case 'amount':
        return a.amount > b.amount; // ascending
      case 'date':
        return a.createdAt > b.createdAt; // ascending
      default:
        return false;
    }
  });

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const one = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 200 }));
const two = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 100 }));
//
// console.log(one);
// console.log(two);
//
// store.dispatch(removeExpense(one.expense.id));
// store.dispatch(editExpense(two.expense.id, {extra: 'hello', amount: 500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(-125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: 'random_string',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
