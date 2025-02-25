import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Metadata chips component that displays account metadata
 * @returns {JSX.Element} Metadata chips component
 */
const MetadataChips = () => {
  const { selectedAccount } = useAccountContext();

  if (!selectedAccount || !selectedAccount.metadata) {
    return null;
  }

  return (
    <div className="metadata-container">
      {selectedAccount.metadata.map((item, index) => (
        <span key={index} className="metadata-chip">{item}</span>
      ))}
    </div>
  );
};

export default MetadataChips;