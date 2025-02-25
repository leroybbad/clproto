import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Tabs component for switching between account tabs
 * @returns {JSX.Element} Tabs component
 */
const Tabs = () => {
  const { selectedAccount, activeTab, setActiveTab } = useAccountContext();

  if (!selectedAccount) {
    return null;
  }

  return (
    <div className="tabs-container">
      {selectedAccount.tabs.map((tab) => (
        <button 
          key={tab.title} 
          className={`tab-button ${activeTab === tab.title ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.title)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;