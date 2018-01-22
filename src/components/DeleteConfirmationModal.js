import React from 'react';
import Modal from 'react-modal';
import moment from 'moment/moment';
import numeral from 'numeral';

const DeleteConfirmationModal = (props) => {
  const {
    expense, isOpen, onRemoveConfirm, onRemoveCancel,
  } = props;
  const date = moment(expense.createdAt).format('MMM D, YYYY');
  const amount = numeral(expense.amount).format('$0,0.00');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRemoveCancel}
      className="modal"
      portalClassName="modal__wrapper"
      closeTimeoutMS={200}
      appElement={document.getElementById('app')}
    >
      <div className="modal__body">
        <h3>Removing an expense</h3>
        <p>Are you sure you want to remove the expense for <span>{expense.description}</span>?
        </p>
        <p>It's {amount} and spent on {date}.
        </p>
      </div>
      <div className="modal__actions">{}
        <button onClick={onRemoveConfirm} className="button button--danger">Confirm</button>
        <button onClick={onRemoveCancel} className="button button--secondary">Cancel</button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
