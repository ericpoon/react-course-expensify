import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectExpensesTotal, selectFilteredExpenses } from '../selectors/expenses';

export const ExpensesSummary = (props) => {
  const { expenseCount: count, hiddenCount } = props;
  const total = numeral(props.expenseTotal).format('$0,0.00');
  const expenseWord = count === 1 ? 'expense' : 'expenses';
  const hiddenExpenseWord = hiddenCount === 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{count}</span> {expenseWord}, totalling <span>{total}</span>
        </h1>
        {hiddenCount > 0
        && <p>{hiddenCount} {hiddenExpenseWord} hidden, clear filters to view all.</p>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const totalCountWithoutFilters = state.expenses.length;
  const expenses = selectFilteredExpenses(state.expenses, state.filters);
  return {
    hiddenCount: totalCountWithoutFilters - expenses.length,
    expenseCount: expenses.length,
    expenseTotal: selectExpensesTotal(expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
