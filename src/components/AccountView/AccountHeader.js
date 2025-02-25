import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Account header component with title, back and clear buttons
 * @returns {JSX.Element} Account header component
 */
const AccountHeader = () => {
  const { selectedAccount, handleBack, handleClear } = useAccountContext();

  return (
    <div className="account-header">
      <button className="back-button" onClick={handleBack}>
        ←
      </button>
      <h2 className="account-title">Account {selectedAccount ? selectedAccount.id : ''}</h2>
      <button className="clear-button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default AccountHeader;