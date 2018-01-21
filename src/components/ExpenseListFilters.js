import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState({calendarFocused});
    };

    onSortChange = (e) => {
        switch (e.target.value) {
        case 'date':
            this.props.sortByDate();
            break;
        case 'amount':
            this.props.sortByAmount();
            break;
        }
    };

    render() {
        return (
            <div className={'content-container'}>
                <div className={'input-group'}>
                    <div className={'input-group__item'}>
                        <input
                            type={'text'}
                            value={this.props.filters.text}
                            placeholder={'Search expenses'}
                            onChange={this.onTextChange}
                            className={'text-input'}
                        />
                    </div>
                    <div className={'input-group__item'}>
                        <select
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                            className={'select'}
                        >
                            <option value={'date'}>Date</option>
                            <option value={'amount'}>Amount</option>
                        </select>
                    </div>
                    <div className={'input-group__item'}>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            startDateId={'start'}
                            endDateId={'end'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);