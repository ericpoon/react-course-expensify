import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        const {expense} = this.props;
        const description = expense ? expense.description : '';
        const note = expense ? expense.note : '';
        const amount = expense ? expense.amount.toString() : '';
        const createdAt = expense ? moment(expense.createdAt) : moment();

        this.state = {
            description,
            note,
            amount,
            createdAt,
            calendarFocused: false,
            error: '',
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description});
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({note});
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}\.?\d{0,2}$/)) {
            this.setState({amount});
        }
    };

    onDateChange = (date) => {
        if (date) this.setState({createdAt: date});
    };

    onFocusChange = ({focused}) => {
        this.setState({calendarFocused: focused});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.description && this.state.amount) {
            this.setState({error: ''});
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        } else {
            this.setState({error: 'Please provide description and amount'});
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className={'form'}>
                {this.state.error && <p className={'form__error'}>{this.state.error}</p>}
                <input
                    type={'text'}
                    placeholder={'Description'}
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    className={'text-input'}
                />
                <input
                    type={'text'}
                    placeholder={'Amount'}
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    className={'text-input'}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    // This extends the date picker to take the full width
                    block
                />
                <textarea
                    placeholder={'Add a note for your expense (optional)'}
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    className={'textarea'}
                />
                <div>
                    {/*This div prevents the button from taking the full width*/}
                    <button className={'button'}>{this.props.submitButtonValue}</button>
                </div>
            </form>
        );
    }
}

export default ExpenseForm;