import React from 'react';
import { useAccountContext } from '../../context/AccountContext';
import AccountHeader from './AccountHeader';
import MetadataChips from './MetadataChips';
import Tabs from './Tabs';
import TabContent from './TabContent';

/**
 * Account form component that combines all account view elements
 * @returns {JSX.Element} Account form component
 */
const AccountForm = () => {
  const { selectedAccount, handleSubmit } = useAccountContext();

  if (!selectedAccount) {
    return null;
  }

  return (
    <div className="account-form">
      <AccountHeader />
      <MetadataChips />
      <Tabs />
      <TabContent />
      
      {/* Submit Button */}
      <div className="button-container">
        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={selectedAccount && selectedAccount.completedDate !== null}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AccountForm;