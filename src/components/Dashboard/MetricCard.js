import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Individual metric card component
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Metric value
 * @param {string} props.metricKey - Key identifier for this metric
 * @returns {JSX.Element} Metric card component
 */
const MetricCard = ({ title, value, metricKey }) => {
  const { selectedMetric, handleMetricSelect } = useAccountContext();
  
  // Ensure the value is always a valid number or string
  let displayValue = isNaN(value) || metricKey === 'bestFlavor' ? value : value;
  
  // Special formatting for the bestFlavor card
  if (metricKey === 'bestFlavor') {
    // Just show the flavor name (already a string)
    displayValue = value;
  }
  
  return (
    <div 
      className={`metric-card ${selectedMetric === metricKey ? 'selected' : ''}`}
      onClick={() => handleMetricSelect(metricKey)}
    >
      <h3>{title}</h3>
      <p className="metric-value">{displayValue}</p>
    </div>
  );
};

export default MetricCard;