const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      return [...state, action.expense];
    }
    case 'REMOVE_EXPENSE': {
      return state.filter(s => s.id !== action.id);
    }
    case 'EDIT_EXPENSE': {
      const { description, note, amount } = action.updates;
      const updates = { description, note, amount };
      return state.map((s) => {
        if (s.id === action.id) return { ...s, ...updates };
        return s;
      });
    }
    case 'SET_EXPENSES': {
      return action.expenses;
    }
    default: {
      return state;
    }
  }
};
