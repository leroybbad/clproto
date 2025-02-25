import React, { createContext, useState, useEffect, useContext } from 'react';
import { sampleAccounts } from '../data/sampleAccounts';
import { updateMetricsData, generateHistoricalData } from '../utils/accountUtils';

// Create context
const AccountContext = createContext();

// Create provider component
export const AccountProvider = ({ children }) => {
  // State Management
  const [accounts, setAccounts] = useState([]);
  const [assignedAccounts, setAssignedAccounts] = useState([]);
  const [completedAccounts, setCompletedAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [activeTab, setActiveTab] = useState('Alive');
  const [showDashboard, setShowDashboard] = useState(true);
  const [metrics, setMetrics] = useState({
    completed: 0,
    clears: 0,
    boosted: 0,
    bestFlavor: 'None',
    velocity: 4.2 // Default velocity value
  });
  const [timeSpan, setTimeSpan] = useState('today');
  const [selectedMetric, setSelectedMetric] = useState('velocity');
  const [historicalData, setHistoricalData] = useState({});
  const [showClearModal, setShowClearModal] = useState(false);
  const [showBackModal, setShowBackModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState({ show: false, accountId: '' });
  const [showClearMessage, setShowClearMessage] = useState(false);
  const [tempAccount, setTempAccount] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    assigned: { key: null, direction: 'ascending' },
    completed: { key: null, direction: 'ascending' }
  });

  // Load accounts from data source
  useEffect(() => {
    // In a real application, this would fetch from an API
    // For now, we're using the sample data
    const loadAccounts = async () => {
      try {
        // Simulate API call
        const data = sampleAccounts;
        
        const modifiedData = data.map(account => ({
          ...account,
          completedDate: account.completedDate || null
        }));
        
        setAccounts(modifiedData);
        setAssignedAccounts(modifiedData.filter(account => !account.completedDate));
        setCompletedAccounts(modifiedData.filter(account => account.completedDate));
        
        // Pass the current metrics to preserve the clears count
        const completedAccountsData = modifiedData.filter(account => account.completedDate);
        setMetrics(prevMetrics => updateMetricsData(completedAccountsData, prevMetrics));
        
        // Generate historical data for initial load
        setHistoricalData(generateHistoricalData('today'));
      } catch (error) {
        console.error("Error loading accounts:", error);
      }
    };

    loadAccounts();
  }, []);

  // Update metrics based on completed accounts
  const updateMetrics = (completedAccts) => {
    const newMetrics = updateMetricsData(completedAccts, metrics);
    setMetrics(prevMetrics => ({
      ...prevMetrics,
      ...newMetrics
    }));
  };

  // Handle account selection
  const handleSelectAccount = (account) => {
    if (isDirty) {
      setTempAccount(account);
      setShowBackModal(true);
    } else {
      setSelectedAccount(JSON.parse(JSON.stringify(account)));
      setActiveTab(account.tabs[0].title);
      setShowDashboard(false);
      setIsDirty(false);
    }
  };

  // Handle form field changes
  const handleFieldChange = (tabIndex, fieldIndex, value, isSelected = false) => {
    setIsDirty(true);
    if (selectedAccount) {
      const updatedAccount = { ...selectedAccount };
      
      // Handle normal fields
      if (!isSelected) {
        updatedAccount.tabs[tabIndex].fields[fieldIndex].value = value;
      } 
      // Handle multi-select fields
      else {
        const field = updatedAccount.tabs[tabIndex].fields[fieldIndex];
        if (field.selected) {
          // If the value is already selected, remove it; otherwise, add it
          const index = field.selected.indexOf(value);
          if (index >= 0) {
            field.selected.splice(index, 1);
          } else {
            field.selected.push(value);
          }
        } else {
          field.selected = [value];
        }
      }
      
      setSelectedAccount(updatedAccount);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedAccount) {
      const now = new Date();
      const updatedAccount = { 
        ...selectedAccount, 
        completedDate: now.toISOString()
      };
      
      // Update accounts list
      const updatedAccounts = accounts.map(account => 
        account.id === updatedAccount.id ? updatedAccount : account
      );
      
      setAccounts(updatedAccounts);
      setAssignedAccounts(updatedAccounts.filter(account => !account.completedDate));
      setCompletedAccounts(updatedAccounts.filter(account => account.completedDate));
      setIsDirty(false);
      
      // Set success message with account ID
      setSuccessMessage({ 
        show: true, 
        accountId: selectedAccount.id 
      });
      
      updateMetrics(updatedAccounts.filter(account => account.completedDate));
      
      // Navigate back to Dashboard
      setSelectedAccount(null);
      setShowDashboard(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage({ show: false, accountId: '' });
      }, 3000);
    }
  };

  // Handle form clear
  const handleClear = () => {
    setShowClearModal(true);
  };

  // Confirm clear action
  const confirmClear = () => {
    if (selectedAccount) {
      // Create a copy with all field values cleared
      const clearedAccount = { ...selectedAccount };
      clearedAccount.tabs.forEach(tab => {
        tab.fields.forEach(field => {
          if (field.label === "Flavor") {
            field.selected = [];
          } else {
            field.value = "";
          }
        });
      });
      
      setSelectedAccount(clearedAccount);
      setShowClearModal(false);
      setShowClearMessage(true);
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        clears: prevMetrics.clears + 1
      }));
      
      // Hide clear message after 3 seconds
      setTimeout(() => {
        setShowClearMessage(false);
      }, 3000);
    }
  };

  // Handle back button (return to dashboard)
  const handleBack = () => {
    if (isDirty) {
      setShowBackModal(true);
    } else {
      goBack();
    }
  };

  // Go back to dashboard
  const goBack = () => {
    setSelectedAccount(null);
    setShowDashboard(true);
    setShowBackModal(false);
    setIsDirty(false);
  };

  // Continue editing and close modal
  const continueEditing = () => {
    setShowBackModal(false);
  };

  // Handle selecting a different account
  const handleChangeAccount = () => {
    setSelectedAccount(tempAccount);
    setActiveTab(tempAccount.tabs[0].title);
    setShowDashboard(false);
    setShowBackModal(false);
    setIsDirty(false);
  };

  // Handle time span change
  const handleTimeSpanChange = (span) => {
    setTimeSpan(span);
    setHistoricalData(generateHistoricalData(span));
  };
  
  // Handle metric card selection
  const handleMetricSelect = (metric) => {
    setSelectedMetric(metric);
  };

  // Handle sorting for tables
  const handleSort = (key, tableType) => {
    setSortConfig(prevConfig => {
      const newDirection = 
        prevConfig[tableType].key === key && prevConfig[tableType].direction === 'ascending' 
          ? 'descending' 
          : 'ascending';
          
      return {
        ...prevConfig,
        [tableType]: { key, direction: newDirection }
      };
    });
  };

  // Get sorted accounts based on sort configuration
  const getSortedAccounts = (accounts, tableType) => {
    const { key, direction } = sortConfig[tableType];
    
    if (!key) return accounts;
    
    return [...accounts].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  // Context value
  const contextValue = {
    accounts,
    assignedAccounts,
    completedAccounts,
    selectedAccount,
    activeTab,
    showDashboard,
    metrics,
    timeSpan,
    selectedMetric,
    historicalData,
    showClearModal,
    showBackModal,
    successMessage,
    showClearMessage,
    isDirty,
    sortConfig,
    setActiveTab,
    handleSelectAccount,
    handleFieldChange,
    handleSubmit,
    handleClear,
    confirmClear,
    handleBack,
    goBack,
    continueEditing,
    handleChangeAccount,
    setShowClearModal,
    setShowBackModal,
    handleTimeSpanChange,
    handleMetricSelect,
    handleSort,
    getSortedAccounts
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};

// Custom hook to use the account context
export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccountContext must be used within an AccountProvider');
  }
  return context;
};

export default AccountContext;