import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Account table component for displaying account lists
 * @param {Object} props - Component props
 * @param {Array} props.accounts - Array of account objects to display
 * @param {string} props.emptyMessage - Message to show when no accounts are available
 * @param {string} props.tableType - Type of table ('assigned' or 'completed')
 * @returns {JSX.Element} Account table component
 */
const AccountTable = ({ accounts, emptyMessage, tableType }) => {
  const { 
    selectedAccount, 
    handleSelectAccount, 
    sortConfig, 
    handleSort,
    getSortedAccounts
  } = useAccountContext();
  
  // Get the current sort configuration for this table
  const currentSortConfig = sortConfig[tableType];
  
  // Get sorted accounts
  const sortedAccounts = getSortedAccounts(accounts, tableType);
  
  // Generate sort indicator based on current sort config
  const getSortIndicator = (key) => {
    if (currentSortConfig.key !== key) return null;
    return currentSortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th className="header-cell">Account</th>
          <th 
            className="header-cell sortable"
            onClick={() => handleSort('type', tableType)}
          >
            Type {getSortIndicator('type')}
          </th>
          <th 
            className="header-cell sortable"
            onClick={() => handleSort('entity', tableType)}
          >
            Entity {getSortIndicator('entity')}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedAccounts.map((account) => (
          <tr 
            key={account.id}
            className={selectedAccount && selectedAccount.id === account.id ? 'selected-row' : ''}
            onClick={() => handleSelectAccount(account)}
          >
            <td>{account.id}</td>
            <td>{account.type}</td>
            <td>{account.entity}</td>
          </tr>
        ))}
        {sortedAccounts.length === 0 && (
          <tr>
            <td colSpan="3" className="empty-message">{emptyMessage}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AccountTable;