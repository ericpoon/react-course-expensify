import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import {selectExpensesTotal, selectFilteredExpenses} from '../selectors/expenses';

export class ExpensesSummary extends React.Component {
    render() {
        const count = this.props.expenseCount;
        const total = numeral(this.props.expenseTotal).format('$0,0.00');
        const expenseWord = count === 1 ? 'expense' : 'expenses';
        return (
            <div>
                <h3>Viewing {count} {expenseWord}, totalling {total}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const expenses = selectFilteredExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expenseTotal: selectExpensesTotal(expenses),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);