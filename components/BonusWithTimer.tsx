import React from 'react';
import Bonus from './Bonus';
import Timer from './Timer';

const BonusWithTimer: React.FC = () => {
  // Set the end date for less than 12 hours from now (e.g., 11 hours and 45 minutes)
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 11);
  endDate.setMinutes(endDate.getMinutes() + 45);
  
  return (
    <div className="bonus-timer-section bg-gray-50 py-6">
      <div className="container-custom max-w-4xl mx-auto px-4 mb-4">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Special Limited Time Offer</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">This exclusive bonus is about to expire! Act quickly to secure your spot.</p>
        </div>
        <Timer endDate={endDate} />
      </div>
      <Bonus />
    </div>
  );
};

export default BonusWithTimer; 