import React from 'react';
import { useAccountContext } from '../../context/AccountContext';
import Dashboard from '../Dashboard';
import AccountForm from './AccountForm';
import MessageBanner from '../Shared/MessageBanner';
import ConfirmationModal from '../Shared/ConfirmationModal';
import { formatDate, formatTime } from '../../utils/accountUtils';

/**
 * Main account view component that manages the dashboard and account form
 * @returns {JSX.Element} Account view component
 */
const AccountView = () => {
  const { 
    selectedAccount, 
    showDashboard, 
    successMessage, 
    showClearMessage, 
    showClearModal, 
    showBackModal,
    confirmClear,
    goBack,
    continueEditing,
    handleChangeAccount,
    setShowClearModal,
    setShowBackModal,
    tempAccount
  } = useAccountContext();

  return (
    <div className="account-panel">
      {/* Success Message */}
      {successMessage.show && (
        <MessageBanner 
          type="success" 
          message={`You have successfully completed account ${successMessage.accountId}.`} 
        />
      )}
      
      {/* Clear Message */}
      {showClearMessage && (
        <MessageBanner 
          type="clear" 
          message="You have cleared all data." 
        />
      )}
      
      {/* Completed Account Message */}
      {selectedAccount && selectedAccount.completedDate && (
        <MessageBanner 
          type="info" 
          message={`This account was completed on ${formatDate(selectedAccount.completedDate)} at ${formatTime(selectedAccount.completedDate)}`} 
        />
      )}
      
      {/* Dashboard or Account Form */}
      {showDashboard ? (
        <Dashboard />
      ) : (
        <AccountForm />
      )}
      
      {/* Clear Confirmation Modal */}
      {showClearModal && (
        <ConfirmationModal 
          message="Are you sure?" 
          onConfirm={confirmClear} 
          onCancel={() => setShowClearModal(false)} 
        />
      )}
      
      {/* Back Confirmation Modal */}
      {showBackModal && (
        <ConfirmationModal 
          message="Are you sure? You haven't saved your changes." 
          onConfirm={tempAccount ? handleChangeAccount : goBack} 
          onCancel={continueEditing} 
        />
      )}
    </div>
  );
};

export default AccountView;