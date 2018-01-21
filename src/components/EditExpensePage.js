import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
    // id = this.props.match.params.id;
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    };
    onRemoveClick = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/dashboard');
    };

    render() {
        return (
            <div>
                <div className={'page-header'}>
                    <div className={'content-container'}>
                        <h1 className={'page-header__title'}>Edit Expense</h1>
                    </div>
                </div>
                <div className={'content-container'}>
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                        submitButtonValue={'Update Expense'}
                    />
                    <button
                        onClick={this.onRemoveClick}
                        className={'button button--secondary'}
                    >
                        Remove Expense
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const {id} = props.match.params;
    return {
        expense: state.expenses.find(e => e.id === id),
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);