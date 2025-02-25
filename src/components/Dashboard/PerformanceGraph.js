import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Performance graph component for dashboard
 * @returns {JSX.Element} Performance graph component
 */
const PerformanceGraph = () => {
  const { selectedMetric, historicalData, timeSpan } = useAccountContext();
  
  // Get the data for the selected metric
  const data = historicalData[selectedMetric] || [];
  
  // Calculate the maximum value for graph scaling
  const maxValue = Math.max(...data.map(item => item.value), 1);
  
  // For velocity, we use a line graph
  if (selectedMetric === 'velocity') {
    return (
      <div className="performance-graph-container">
        <h3 className="graph-title">
          Velocity (accounts per minute) throughout the day
        </h3>
        <div className="graph-area">
          <div className="y-axis">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="y-axis-label">
                {((maxValue * (4 - i)) / 4).toFixed(1)}
              </div>
            ))}
          </div>
          <div className="line-chart">
            <svg viewBox={`0 0 ${data.length * 50} 200`} className="line-svg">
              <polyline
                points={data.map((point, index) => 
                  `${index * 50 + 25},${200 - (point.value / maxValue) * 180}`
                ).join(' ')}
                fill="none"
                stroke="#1976d2"
                strokeWidth="3"
              />
              {data.map((point, index) => (
                <circle
                  key={index}
                  cx={index * 50 + 25}
                  cy={200 - (point.value / maxValue) * 180}
                  r="4"
                  fill="#1976d2"
                />
              ))}
            </svg>
            <div className="x-axis">
              {data.map((point, index) => (
                <div key={index} className="x-axis-label">
                  {point.time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // For other metrics, use bar graphs
  return (
    <div className="performance-graph-container">
      <h3 className="graph-title">
        {selectedMetric === 'completed' && 'Completed Accounts'}
        {selectedMetric === 'clears' && 'Account Clears'}
        {selectedMetric === 'boosted' && 'Boosted Accounts'}
        {selectedMetric === 'bestFlavor' && 'Best Flavor Distribution'}
        {timeSpan === 'today' ? ' Today' : timeSpan === 'week' ? ' This Week' : ' This Month'}
      </h3>
      <div className="graph-area">
        {selectedMetric !== 'bestFlavor' && (
          <div className="y-axis">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="y-axis-label">
                {Math.floor((maxValue * (4 - i)) / 4)}
              </div>
            ))}
          </div>
        )}
        <div className="bar-chart">
          {data.map((point, index) => (
            <div key={index} className="bar-container">
              {selectedMetric === 'bestFlavor' ? (
                <div 
                  className="flavor-bar"
                  style={{ 
                    backgroundColor: 
                      point.value === 'bold' ? '#d32f2f' :
                      point.value === 'mild' ? '#388e3c' :
                      point.value === 'spicy' ? '#f57c00' :
                      '#7b1fa2'
                  }}
                >
                  <span className="flavor-label">{point.value}</span>
                </div>
              ) : (
                <div 
                  className={`bar ${selectedMetric}`}
                  style={{ 
                    height: `${(point.value / maxValue) * 180}px`
                  }}
                >
                  <span className="bar-value">{point.value}</span>
                </div>
              )}
              <div className="x-axis-label">{point.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph;