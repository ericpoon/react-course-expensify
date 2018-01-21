import React from 'react';
import Modal from 'react-modal';
import moment from 'moment/moment';
import numeral from 'numeral';

export default class DeleteConfirmationModal extends React.Component {
    render() {
        const {expense, isOpen, onRemoveConfirm, onRemoveCancel} = this.props;
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRemoveCancel}
                className={'modal'}
                portalClassName={'modal__wrapper'}
                closeTimeoutMS={200}
                appElement={document.getElementById('app')}
            >
                <div className={'modal__body'}>
                    <h3>Removing an expense</h3>
                    <p>Are you sure you want to remove the expense for <span>{expense.description}</span>?
                    </p>
                    <p>It's {numeral(expense.amount).format('$0,0.00')} and spent
                        on {moment(expense.createdAt).format('MMM D, YYYY')}.</p>
                </div>
                <div className={'modal__actions'}>
                    <button onClick={onRemoveConfirm} className={'button button--danger'}>Confirm</button>
                    <button onClick={onRemoveCancel} className={'button button--secondary'}>Cancel</button>
                </div>
            </Modal>
        );
    }
}