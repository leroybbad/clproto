import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Tab content component that displays form fields for the active tab
 * @returns {JSX.Element} Tab content component
 */
const TabContent = () => {
  const { selectedAccount, activeTab, handleFieldChange } = useAccountContext();

  if (!selectedAccount) {
    return null;
  }

  const activeTabIndex = selectedAccount.tabs.findIndex(tab => tab.title === activeTab);
  
  if (activeTabIndex === -1) {
    return null;
  }
  
  const tabData = selectedAccount.tabs[activeTabIndex];

  return (
    <div className="tab-content">
      <div className="tab-fields">
        {tabData.fields.map((field, fieldIndex) => (
          <div key={fieldIndex} className="field-container">
            <label className="field-label">{field.label}</label>
            
            {field.label === "Flavor" ? (
              <div className="flavor-options">
                {field.options.map((option) => (
                  <label key={option} className="flavor-option">
                    <input 
                      type="checkbox" 
                      checked={field.selected && field.selected.includes(option)}
                      onChange={() => handleFieldChange(activeTabIndex, fieldIndex, option, true)}
                      disabled={selectedAccount.completedDate !== null}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : field.label === "Comment" ? (
              <textarea 
                className="comment-input" 
                value={field.value || ''}
                onChange={(e) => handleFieldChange(activeTabIndex, fieldIndex, e.target.value)}
                disabled={selectedAccount.completedDate !== null}
              />
            ) : (
              <input 
                type="text" 
                className="field-input"
                value={field.value || ''}
                onChange={(e) => handleFieldChange(activeTabIndex, fieldIndex, e.target.value)}
                disabled={selectedAccount.completedDate !== null}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;