import React from 'react';
import Image from 'next/image';

const Bonus: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-primary-dark to-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block bg-white text-primary font-bold px-4 py-2 rounded-full mb-6">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Included This Week Only: Turn Your Passion Into Profit With The Coaching Career Kickstarter Course!
            </h2>
            <p className="text-lg mb-8 text-white/90">
              When you enroll in the Essentials Bundle this week, you'll receive our complete Coaching Career Kickstarter Course ($649 value) at no additional cost! This comprehensive program is designed to help you launch and grow a successful nutrition coaching business.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">In this bonus course, you'll learn:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>How to define your ideal client and niche market</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Effective marketing strategies to attract clients</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>How to price your services for maximum profitability</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Client retention strategies that create long-term success</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Digital marketing essentials for nutritionists</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white text-primary font-bold text-xl px-4 py-2 rounded-md">
                $649 VALUE
              </div>
              <div className="text-xl font-bold">
                FREE with Essentials Bundle
              </div>
            </div>
            
            <a href="#pricing" className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg shadow-lg">
              Claim Your Bonus Now
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              {/* Bonus course image - filling the frame completely */}
              <Image 
                src="/images/coaching-career-kickstarter.png" 
                alt="Coaching Career Kickstarter Course" 
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus; 