import React, { useState, useRef, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [autoScrollDirection, setAutoScrollDirection] = useState<'left' | 'right'>('right');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Calculate the maximum scroll width on mount and window resize
  useEffect(() => {
    if (scrollRef.current) {
      const calculateMaxScroll = () => {
        const { scrollWidth, clientWidth } = scrollRef.current!;
        setMaxScroll(scrollWidth - clientWidth);
      };
      
      calculateMaxScroll();
      window.addEventListener('resize', calculateMaxScroll);
      
      return () => {
        window.removeEventListener('resize', calculateMaxScroll);
      };
    }
  }, []);

  // Auto-scrolling functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      if (isAutoScrolling) {
        autoScrollIntervalRef.current = setInterval(() => {
          if (scrollRef.current) {
            const scrollAmount = 1; // Smaller value for smoother scrolling
            let newPosition = 0;

            if (autoScrollDirection === 'right') {
              newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
              
              // If we're at the end, change direction
              if (newPosition >= maxScroll) {
                setAutoScrollDirection('left');
              }
            } else {
              newPosition = Math.max(0, scrollPosition - scrollAmount);
              
              // If we're at the beginning, change direction
              if (newPosition <= 0) {
                setAutoScrollDirection('right');
              }
            }
            
            scrollRef.current.scrollLeft = newPosition;
            setScrollPosition(newPosition);
          }
        }, 20); // Faster interval for smoother scrolling
      }
    };
    
    startAutoScroll();
    
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, autoScrollDirection, scrollPosition, maxScroll]);

  // Pause auto-scrolling when user interacts
  const handleManualScroll = () => {
    setIsAutoScrolling(false);
    
    // Resume auto-scrolling after user inactivity
    if (autoScrollIntervalRef.current) {
      clearTimeout(autoScrollIntervalRef.current);
    }
    
    autoScrollIntervalRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000); // Resume after 5 seconds of inactivity
  };

  // Handle touch events for better mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsAutoScrolling(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null && scrollRef.current) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartXRef.current - touchEndX;
      
      // If the swipe is significant enough, manually scroll
      if (Math.abs(diff) > 50) {
        const scrollAmount = scrollRef.current.clientWidth / 2;
        let newPosition = diff > 0 
          ? Math.min(maxScroll, scrollPosition + scrollAmount) // Swipe left, scroll right
          : Math.max(0, scrollPosition - scrollAmount); // Swipe right, scroll left
        
        scrollRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        });
        
        setScrollPosition(newPosition);
      }
    }
    
    // Resume auto-scrolling after 5 seconds
    touchStartXRef.current = null;
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      handleManualScroll(); // Pause auto-scrolling during manual interaction
      
      const scrollAmount = scrollRef.current.clientWidth / 2;
      let newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">Join Thousands of Certified Nutrition Coaches</h2>
        
        <div className="relative">
          {/* Left Arrow */}
          <button 
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md text-primary hover:bg-primary hover:text-white transition-colors ${scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={() => scroll('left')}
            disabled={scrollPosition <= 0}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button 
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md text-primary hover:bg-primary hover:text-white transition-colors ${scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={() => scroll('right')}
            disabled={scrollPosition >= maxScroll}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 sm:pb-8 hide-scrollbar snap-x snap-mandatory"
            onScroll={(e) => {
              setScrollPosition(e.currentTarget.scrollLeft);
              if (e.currentTarget.scrollLeft !== scrollPosition) {
                handleManualScroll();
              }
            }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-live="polite"
          >
            {/* Certification Holder Card 1 */}
            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-4 snap-start">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
                  {/* High-definition professional headshot */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm mb-3">Certified 2021 • Sports Nutritionist</p>
                  <p className="text-gray-700 text-sm sm:text-base">"The Nutrition Academy certification helped me launch my sports nutrition practice and work with professional athletes."</p>
                </div>
              </div>
            </div>
            
            {/* Certification Holder Card 2 */}
            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-4 snap-start">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
                  {/* High-definition professional headshot */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Michael Chen</h3>
                  <p className="text-gray-600 text-sm mb-3">Certified 2020 • Wellness Coach</p>
                  <p className="text-gray-700 text-sm sm:text-base">"I've built a six-figure coaching business helping busy professionals transform their health through proper nutrition."</p>
                </div>
              </div>
            </div>
            
            {/* Certification Holder Card 3 */}
            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-4 snap-start">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
                  {/* High-definition professional headshot */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Jessica Martinez</h3>
                  <p className="text-gray-600 text-sm mb-3">Certified 2022 • Weight Management Specialist</p>
                  <p className="text-gray-700 text-sm sm:text-base">"The certification gave me the confidence and credibility to launch my online coaching program for sustainable weight loss."</p>
                </div>
              </div>
            </div>
            
            {/* Certification Holder Card 4 */}
            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-4 snap-start">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
                  {/* High-definition professional headshot */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">David Williams</h3>
                  <p className="text-gray-600 text-sm mb-3">Certified 2019 • Corporate Wellness Coach</p>
                  <p className="text-gray-700 text-sm sm:text-base">"I've partnered with Fortune 500 companies to implement nutrition programs that have improved employee health and productivity."</p>
                </div>
              </div>
            </div>
            
            {/* Certification Holder Card 5 (New) */}
            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-4 snap-start">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
                  {/* High-definition professional headshot */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Natalie Parker</h3>
                  <p className="text-gray-600 text-sm mb-3">Certified 2022 • Family Nutrition Specialist</p>
                  <p className="text-gray-700 text-sm sm:text-base">"The practical tools and frameworks I learned have enabled me to help families build healthy eating habits together and transform their relationships with food."</p>
                </div>
              </div>
            </div>
            
            {/* Certification Holder Card 6 (New) */}
            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-3 sm:px-4 snap-start">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="h-48 sm:h-64 bg-gray-200 relative overflow-hidden">
                  {/* High-definition professional headshot */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Robert Sanchez</h3>
                  <p className="text-gray-600 text-sm mb-3">Certified 2021 • Clinical Nutrition Advisor</p>
                  <p className="text-gray-700 text-sm sm:text-base">"Combining this certification with my medical background has allowed me to offer comprehensive care to patients with complex health conditions through targeted nutritional strategies."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Optional: Navigation Dots */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="flex space-x-1.5 sm:space-x-2">
            {Array(6).fill(0).map((_, i) => (
              <button 
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  scrollPosition >= (i * maxScroll / 5) && scrollPosition < ((i + 1) * maxScroll / 5) 
                    ? 'bg-primary' 
                    : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (scrollRef.current) {
                    handleManualScroll(); // Pause auto-scrolling during manual interaction
                    const newPosition = (maxScroll / 5) * i;
                    scrollRef.current.scrollTo({
                      left: newPosition,
                      behavior: 'smooth'
                    });
                    setScrollPosition(newPosition);
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials; 