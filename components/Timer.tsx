import React, { useState, useEffect } from 'react';

interface TimerProps {
  endDate: Date;
}

const Timer: React.FC<TimerProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        // Timer expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    // Calculate the time left immediately
    calculateTimeLeft();
    
    // Update the timer every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [endDate]);
  
  return (
    <div className="bg-gradient-to-r from-primary-dark to-primary text-white rounded-xl p-6 shadow-lg text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">LIMITED TIME OFFER ENDS IN:</h3>
      <div className="flex flex-wrap space-x-2 md:space-x-4 justify-center">
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-primary bg-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
              {timeLeft.days}
            </div>
            <span className="text-sm text-white">Days</span>
          </div>
        )}
        
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold text-primary bg-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span className="text-sm text-white">Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold text-primary bg-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-sm text-white">Minutes</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold text-primary bg-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-2">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <span className="text-sm text-white">Seconds</span>
        </div>
      </div>
      <p className="mt-4 text-white/90 font-medium">Don't miss out on this exclusive bonus offer!</p>
    </div>
  );
};

export default Timer;
