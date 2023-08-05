import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positivePercentage.toFixed(2)}%</p>
        </div>
      ) : (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export default Statistics;
