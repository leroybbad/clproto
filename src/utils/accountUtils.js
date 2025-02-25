/**
 * Calculates metrics based on completed accounts
 * @param {Array} completedAccounts - Array of completed account objects
 * @param {Object} currentMetrics - Current metrics object with clears count
 * @returns {Object} Metrics object with counts and calculations
 */
export const updateMetricsData = (completedAccounts, currentMetrics = { clears: 0 }) => {
  // Count completed
  const completed = completedAccounts.length;
  
  // Count boosted (accounts with updated Boosted tab)
  const boosted = completedAccounts.filter(account => 
    account.tabs.find(tab => 
      tab.title === "Boosted" && tab.fields.some(field => field.value)
    )
  ).length;
  
  // Count total flavors to find the best one
  const flavors = { bold: 0, mild: 0, spicy: 0, exotic: 0 };
  completedAccounts.forEach(account => {
    account.tabs.forEach(tab => {
      const flavorField = tab.fields.find(field => field.label === "Flavor");
      if (flavorField && flavorField.selected) {
        flavorField.selected.forEach(flavor => {
          flavors[flavor]++;
        });
      }
    });
  });
  
  // Find best flavor
  let bestFlavor = "None";
  let maxCount = 0;
  for (const [flavor, count] of Object.entries(flavors)) {
    if (count > maxCount) {
      maxCount = count;
      bestFlavor = flavor;
    }
  }
  
  return {
    completed,
    boosted,
    bestFlavor: maxCount > 0 ? bestFlavor : "None",
    clears: currentMetrics.clears || 0, // Preserve the clears count
    velocity: currentMetrics.velocity || 4.2 // Preserve velocity
  };
};

/**
 * Creates a deep clone of an account object
 * @param {Object} account - Account object to clone
 * @returns {Object} Cloned account object
 */
export const cloneAccount = (account) => {
  return JSON.parse(JSON.stringify(account));
};

/**
 * Formats a date string to a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

/**
 * Formats a time string to a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted time string
 */
export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString();
};

/**
 * Filters accounts into assigned and completed
 * @param {Array} accounts - Array of all account objects
 * @returns {Object} Object containing assigned and completed accounts
 */
export const categorizeAccounts = (accounts) => {
  const assigned = accounts.filter(account => !account.completedDate);
  const completed = accounts.filter(account => account.completedDate);
  
  return { assigned, completed };
};

/**
 * Generates random historical data for dashboard metrics
 * @param {string} timeSpan - Time span (today, week, month)
 * @returns {Object} Object with historical data for each metric
 */
export const generateHistoricalData = (timeSpan) => {
  // Helper function to generate random numbers
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Generate dates array
  const getDates = (days) => {
    const dates = [];
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    return dates;
  };
  
  let days;
  switch (timeSpan) {
    case 'today':
      days = 0;
      break;
    case 'week':
      days = 7;
      break;
    case 'month':
    default:
      days = 30;
      break;
  }
  
  const dates = getDates(days);
  
  // Generate data for each metric
  const completed = dates.map(date => ({
    date,
    value: random(1, 15)
  }));
  
  const clears = dates.map(date => ({
    date,
    value: random(0, 8)
  }));
  
  const boosted = dates.map(date => ({
    date,
    value: random(0, 10)
  }));
  
  const bestFlavor = dates.map(date => {
    const flavors = ['bold', 'mild', 'spicy', 'exotic'];
    return {
      date,
      value: flavors[random(0, 3)],
      count: random(1, 10)
    };
  });
  
  // Generate hourly velocity data for a workday
  const generateVelocityData = () => {
    const hours = [];
    for (let i = 8; i <= 20; i++) {
      const hour = i > 12 ? `${i - 12} PM` : i === 12 ? '12 PM' : `${i} AM`;
      hours.push(hour);
    }
    
    return hours.map(hour => {
      const baseVelocity = 5;
      // More productivity in morning and late afternoon, dip at lunch
      let modifier = 1;
      
      if (hour.includes('8 AM') || hour.includes('9 AM')) {
        modifier = 0.8; // Starting the day
      } else if (hour.includes('10 AM') || hour.includes('11 AM')) {
        modifier = 1.2; // Morning productivity
      } else if (hour.includes('12 PM') || hour.includes('1 PM')) {
        modifier = 0.6; // Lunch dip
      } else if (hour.includes('2 PM') || hour.includes('3 PM')) {
        modifier = 1.0; // Afternoon ramp-up
      } else if (hour.includes('4 PM') || hour.includes('5 PM')) {
        modifier = 1.3; // Late afternoon productivity
      } else {
        modifier = 0.7; // End of day
      }
      
      // Add some randomness
      const randomFactor = 0.8 + (Math.random() * 0.4);
      
      return {
        time: hour,
        value: +(baseVelocity * modifier * randomFactor).toFixed(1)
      };
    });
  };
  
  const velocity = generateVelocityData();
  
  return {
    completed,
    clears,
    boosted,
    bestFlavor,
    velocity
  };
};