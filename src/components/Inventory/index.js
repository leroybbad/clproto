import React from 'react';
import AccountTable from './AccountTable';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Inventory panel component that shows assigned and completed accounts
 * @returns {JSX.Element} Inventory panel component
 */
const Inventory = () => {
  const { assignedAccounts, completedAccounts } = useAccountContext();

  return (
    <div className="inventory-panel">
      <h2 className="panel-title">My Inventory</h2>
      
      {/* Assigned Accounts */}
      <div className="inventory-section">
        <h3 className="section-title">Assigned</h3>
        <AccountTable 
          accounts={assignedAccounts} 
          emptyMessage="No assigned accounts" 
          tableType="assigned"
        />
      </div>
      
      {/* Completed Accounts */}
      <div className="inventory-section">
        <h3 className="section-title">Completed</h3>
        <AccountTable 
          accounts={completedAccounts} 
          emptyMessage="No completed accounts" 
          tableType="completed"
        />
      </div>
    </div>
  );
};

export default Inventory;