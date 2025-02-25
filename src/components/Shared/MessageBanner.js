import React from 'react';

/**
 * Reusable message banner component
 * @param {Object} props - Component props
 * @param {string} props.type - Message type (success, clear, info)
 * @param {string} props.message - Message content
 * @returns {JSX.Element} Message banner component
 */
const MessageBanner = ({ type, message }) => {
  return (
    <div className={`message-banner ${type}`}>
      {message}
    </div>
  );
};

export default MessageBanner;