import React from 'react';

/**
 * Reusable confirmation modal component
 * @param {Object} props - Component props
 * @param {string} props.message - Modal message
 * @param {Function} props.onConfirm - Function to call on confirmation
 * @param {Function} props.onCancel - Function to call on cancellation
 * @returns {JSX.Element} Confirmation modal component
 */
const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>{message}</h3>
        <div className="modal-buttons">
          <button className="modal-button yes" onClick={onConfirm}>Yes</button>
          <button className="modal-button cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;