import moment from 'moment';

export const selectFilteredExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses
        .filter(expense => {
            const {createdAt, description, amount} = expense;
            const createdAtMoment = moment(createdAt);
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
            const textMatch = typeof text !== 'string' || description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
            case 'amount':
                return a.amount < b.amount; // descending
            case 'date':
                return a.createdAt < b.createdAt; // descending
            default:
                return false;
            }
        });
};

export const selectExpensesTotal = (expenses) => {
    return expenses
        .map(ex => ex.amount)
        .reduce((sum, value) => sum + value, 0);
};