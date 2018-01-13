import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
    // id = this.props.match.params.id;
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemoveClick = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    submitButtonValue={'Edit Expense'}
                />
                <button onClick={this.onRemoveClick}>
                    Remove Expense
                </button>
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);