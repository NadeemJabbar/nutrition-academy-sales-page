import React from 'react';
import Image from 'next/image';

const Bonus: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-primary-dark to-primary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2">
            <div className="inline-block bg-white text-primary font-bold px-3 py-1 rounded-full mb-3 text-sm">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Included This Week Only: Turn Your Passion Into Profit!
            </h2>
            <p className="text-base mb-4 text-white/90">
              Enroll in the Essentials Bundle to receive our Coaching Career Kickstarter Course ($649 value) at no cost. Launch your nutrition coaching business with our proven strategies.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
              <h3 className="text-lg font-bold mb-2">In this bonus course, you'll learn:</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>How to define your ideal client and niche market</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Effective marketing strategies to attract clients</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>How to price your services for maximum profitability</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Client retention strategies for long-term success</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white text-primary font-bold text-lg px-3 py-1 rounded-md">
                $649 VALUE
              </div>
              <div className="text-lg font-bold">
                FREE with Essentials Bundle
              </div>
            </div>
            
            <a href="#pricing" className="inline-block bg-white text-primary font-bold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-base shadow-lg">
              Claim Your Bonus Now
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm">
              <Image 
                src="/images/coaching-career-kickstarter.png" 
                alt="Coaching Career Kickstarter Course" 
                fill
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                priority
                className="transition-transform duration-300 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus; 