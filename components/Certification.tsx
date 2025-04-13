import React from 'react';

const Certification: React.FC = () => {
  return (
    <section className="section bg-white" id="certification">
      <div className="container-custom">
        <h2 className="section-title">Become a Certified Nutrition Coach</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-8">
              <h3 className="text-xl font-bold mb-4">Industry-Recognized Certification</h3>
              <p className="text-gray-700">
                Our certification is recognized throughout the health and wellness industry, giving you the credentials you need to stand out in a competitive market.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-8">
              <h3 className="text-xl font-bold mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-700">
                Master the science of nutrition with our in-depth curriculum covering macronutrients, micronutrients, digestion, metabolism, and practical coaching strategies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Business Development Tools</h3>
              <p className="text-gray-700">
                Gain access to proven marketing templates, client acquisition strategies, and business systems to help you build a successful nutrition coaching practice.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/certification.jpg')" }}></div>
              </div>
              
              <div className="bg-white p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Accredited Program</h4>
                      <p className="text-sm text-gray-600">Recognized industry-wide</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">$899</span>
                    <p className="text-sm text-gray-600">or $99/month</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>40+ hours of in-depth video training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Comprehensive study materials and resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Practice client assessments and case studies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Access to coaching community and mentors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Business development resources and templates</span>
                  </li>
                </ul>
                
                <a href="#pricing" className="block w-full text-center btn btn-primary">
                  Get Certified
                </a>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary-light text-white rounded-full p-4 shadow-lg transform rotate-12">
              <div className="font-bold text-xl">
                Self-paced<br />learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
