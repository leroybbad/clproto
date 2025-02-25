import React from 'react';
import { AccountProvider } from './context/AccountContext';
import Inventory from './components/Inventory';
import AccountView from './components/AccountView';
import './styles.css';

/**
 * Main application component
 * @returns {JSX.Element} App component
 */
const App = () => {
  return (
    <AccountProvider>
      <div className="app-container">
        <div className="main-layout">
          <Inventory />
          <AccountView />
        </div>
      </div>
    </AccountProvider>
  );
};

export default App;