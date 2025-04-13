import React from 'react';
import Bonus from './Bonus';
import Timer from './Timer';

const BonusWithTimer: React.FC = () => {
  // Set the end date for the timer - 7 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  
  return (
    <div className="bonus-timer-section bg-gray-50 py-12">
      <div className="container-custom max-w-5xl mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Limited Time Offer</h2>
          <p className="text-lg text-gray-600">This exclusive bonus is only available for a limited time.</p>
        </div>
        <Timer endDate={endDate} />
      </div>
      <Bonus />
    </div>
  );
};

export default BonusWithTimer; 