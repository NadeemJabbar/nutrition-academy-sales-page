import React from 'react';
import Image from 'next/image';

const Overview: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Overview of Nutrition Academy Certification</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div>
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Our Comprehensive Program Includes:</h3>
              
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h4 className="font-bold text-sm sm:text-base">Nutritional Science Fundamentals</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Master the core principles of nutrition for optimal health and wellbeing.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h4 className="font-bold text-sm sm:text-base">Client Assessment Techniques</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Learn how to effectively assess clients' needs, habits, and health markers.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h4 className="font-bold text-sm sm:text-base">Meal Planning & Recipe Development</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Create personalized meal plans and delicious recipes for diverse client needs.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h4 className="font-bold text-sm sm:text-base">Behavior Change Coaching</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Develop effective strategies to help clients adopt and maintain healthy habits.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h4 className="font-bold text-sm sm:text-base">Business Development Tools</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Learn to market your services and build a thriving nutrition coaching practice.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg mt-6 lg:mt-0">
            <Image 
              src="/images/certification-overview.png" 
              alt="Nutrition Academy Certification"
              fill
              style={{objectFit: 'cover'}}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 sm:p-6 lg:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Become a Certified Nutrition Coach</h3>
                <p className="text-gray-200 text-sm sm:text-base">Join thousands of successful coaches changing lives through evidence-based nutrition guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview; 