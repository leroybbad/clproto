import React from 'react';
import MetricCard from './MetricCard';
import TimeSpanToggle from './TimeSpanToggle';
import PerformanceGraph from './PerformanceGraph';
import { useAccountContext } from '../../context/AccountContext';

/**
 * Dashboard component that displays metrics
 * @returns {JSX.Element} Dashboard component
 */
const Dashboard = () => {
  const { metrics } = useAccountContext();

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <h2 className="panel-title">My Dashboard</h2>
        <TimeSpanToggle />
      </div>
      
      <div className="metrics-container">
        <MetricCard title="Velocity" value={metrics.velocity} metricKey="velocity" />
        <MetricCard title="Completed" value={metrics.completed} metricKey="completed" />
        <MetricCard title="Clears" value={metrics.clears} metricKey="clears" />
        <MetricCard title="Boosted" value={metrics.boosted} metricKey="boosted" />
        <MetricCard title="Best Flavor" value={metrics.bestFlavor} metricKey="bestFlavor" />
      </div>
      
      <PerformanceGraph />
    </div>
  );
};

export default Dashboard;