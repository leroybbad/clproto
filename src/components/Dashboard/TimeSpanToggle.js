import React from 'react';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Component for toggling the dashboard time span
 * @returns {JSX.Element} Time span toggle component
 */
const TimeSpanToggle = () => {
  const { timeSpan, handleTimeSpanChange } = useAccountContext();

  return (
    <div className="time-span-toggle">
      <select 
        className="time-span-select"
        value={timeSpan}
        onChange={(e) => handleTimeSpanChange(e.target.value)}
      >
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </div>
  );
};

export default TimeSpanToggle;