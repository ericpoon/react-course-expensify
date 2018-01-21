import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectExpensesTotal, selectFilteredExpenses} from '../selectors/expenses';

export class ExpensesSummary extends React.Component {
    render() {
        const count = this.props.expenseCount;
        const total = numeral(this.props.expenseTotal).format('$0,0.00');
        const expenseWord = count === 1 ? 'expense' : 'expenses';
        return (
            <div className={'page-header'}>
                <div className={'content-container'}>
                    <h1 className={'page-header__title'}>
                        Viewing <span>{count}</span> {expenseWord}, totalling <span>{total}</span>
                    </h1>
                    <div className={'page-header__actions'}>
                        <Link className={'button'} to={'/create'}>Add Expense</Link>
                    </div>
                </div>
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