import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Pricing: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if device is mobile/touch for proper hover effects
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // For mobile, we'll set the "premium" plan as permanently hovered
  useEffect(() => {
    if (isMobile) {
      setHoveredPlan('premium');
    } else {
      setHoveredPlan(null);
    }
  }, [isMobile]);
  
  const handleInteraction = (plan: string) => {
    if (!isMobile) {
      setHoveredPlan(plan);
    }
  };
  
  const handleInteractionEnd = () => {
    if (!isMobile) {
      setHoveredPlan(null);
    }
  };
  
  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Choose Your Plan</h2>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div 
            className={`flex-1 bg-white rounded-2xl overflow-hidden border border-gray-100 mb-6 lg:mb-0
              transition-all duration-500 ease-in-out transform 
              ${hoveredPlan === 'basic' ? 'shadow-2xl lg:-translate-y-4 z-20' : 'shadow-md hover:shadow-lg'}`}
            onMouseEnter={() => handleInteraction('basic')}
            onMouseLeave={handleInteractionEnd}
          >
            <div className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">Nutrition Academy Certification Only</p>
              
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold">$399</span>
                <span className="text-gray-500 ml-2">USD</span>
                <p className="text-gray-500 mt-1">or $36/month</p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete Nutrition Certification Course</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Digital Certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic Assessment Tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 Year Access to Content Updates</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="w-5 h-5 text-gray-300 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Career Kickstarter Course</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="w-5 h-5 text-gray-300 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Advanced Business Tools</span>
                </li>
              </ul>
              
              <Link href="/checkout?plan=basic" className={`block w-full py-3 px-4 font-medium text-center rounded-md border-2 border-primary transition-colors ${hoveredPlan === 'basic' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}>
                Choose Basic
              </Link>
            </div>
          </div>
          
          {/* Premium Plan - Featured */}
          <div 
            className={`flex-1 bg-white rounded-2xl overflow-hidden border-2 mb-6 lg:mb-0
              ${hoveredPlan === 'premium' ? 'border-primary shadow-2xl lg:-translate-y-6 z-30' : 'border-primary shadow-xl lg:scale-105 z-10'} 
              transition-all duration-500 ease-in-out transform order-first lg:order-none`}
            onMouseEnter={() => handleInteraction('premium')}
            onMouseLeave={handleInteractionEnd}
          >
            <div className="bg-primary text-white py-2 sm:py-3 px-4 sm:px-6 text-center font-bold text-sm sm:text-base">
              MOST POPULAR
            </div>
            <div className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Essentials Bundle</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">Complete Package for Success</p>
              
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center flex-wrap">
                  <span className="text-3xl sm:text-4xl font-bold">$549</span>
                  <span className="text-gray-500 ml-2">USD</span>
                  <span className="ml-2 sm:ml-3 line-through text-gray-400">$1,198</span>
                </div>
                <p className="text-gray-500 mt-1">or $59/month</p>
                <p className="text-primary font-semibold mt-2">Save over 50%!</p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="font-medium">Complete Nutrition Certification Course</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="font-medium">Coaching Career Kickstarter Course</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Premium Digital Certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete Client Tool Suite</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lifetime Access to Content Updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Business Launch Marketing Kit</span>
                </li>
              </ul>
              
              <Link href="/checkout?plan=premium" className={`block w-full py-3 px-4 font-medium text-center rounded-md transition-all duration-300 shadow-md ${hoveredPlan === 'premium' ? 'bg-primary-dark text-white scale-105' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                Choose Essentials Bundle
              </Link>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div 
            className={`flex-1 bg-white rounded-2xl overflow-hidden border border-gray-100 
              transition-all duration-500 ease-in-out transform 
              ${hoveredPlan === 'professional' ? 'shadow-2xl lg:-translate-y-4 z-20' : 'shadow-md hover:shadow-lg'}`}
            onMouseEnter={() => handleInteraction('professional')}
            onMouseLeave={handleInteractionEnd}
          >
            <div className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">For Serious Business Growth</p>
              
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold">$899</span>
                <span className="text-gray-500 ml-2">USD</span>
                <p className="text-gray-500 mt-1">or $85/month</p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Everything in Essentials Bundle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1-on-1 Business Coaching (4 Sessions)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Website Setup & Optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced Client Acquisition System</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Featured Listing in Coach Directory</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>White-Label Client Resources</span>
                </li>
              </ul>
              
              <Link href="/checkout?plan=professional" className={`block w-full py-3 px-4 font-medium text-center rounded-md border-2 border-primary transition-colors ${hoveredPlan === 'professional' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}>
                Choose Professional
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Guarantee */}
      <div className="max-w-3xl mx-auto mt-10 sm:mt-16 bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <div className="flex-shrink-0">
            <svg className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600">We stand behind our program with confidence. If you're not completely satisfied with your purchase, simply contact us within 30 days for a full refund. No questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 