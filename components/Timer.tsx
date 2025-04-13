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
    <div className="bg-gradient-to-r from-primary-dark to-primary text-white rounded-xl p-4 shadow-lg text-center max-w-2xl mx-auto">
      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">OFFER ENDS IN:</h3>
      <div className="flex justify-center">
        <div className="flex flex-row space-x-2 justify-center">
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-2xl font-bold text-primary bg-white rounded-lg w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-white mt-1">Hours</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-2xl font-bold text-primary bg-white rounded-lg w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-white mt-1">Minutes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-2xl font-bold text-primary bg-white rounded-lg w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-white mt-1">Seconds</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-white/90 text-sm font-medium">Don't miss out on this exclusive bonus offer!</p>
    </div>
  );
};

export default Timer;
