import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Trusted from '../components/Trusted';
import Features from '../components/Features';
import Overview from '../components/Overview';
import Certification from '../components/Certification';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Bonus from '../components/Bonus';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Nutrition Academy Essentials Bundle</title>
        <meta name="description" content="Unlock your potential with the Nutrition Academy certification" />
      </Head>
      <Header />
      <Hero />
      <Trusted />
      <Features />
      <Overview />
      <Certification />
      
      {/* Certification Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">What You'll Get After Certification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Official Digital Certificate</h3>
              <p className="text-gray-600">Receive a professionally designed digital certificate to showcase your expertise.</p>
            </div>
            
            {/* Toolkit Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Toolkit</h3>
              <p className="text-gray-600">Access to our complete library of client assessment forms, meal planning templates, and tracking tools.</p>
            </div>
            
            {/* Community Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Membership</h3>
              <p className="text-gray-600">Join our exclusive community of nutrition professionals for ongoing support, networking, and continued learning.</p>
            </div>
            
            {/* Client Acquisition Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Acquisition Funnel</h3>
              <p className="text-gray-600">Ready-to-use marketing funnel including lead magnets, email sequences, and consultation templates.</p>
            </div>
            
            {/* Continuing Education Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuing Education</h3>
              <p className="text-gray-600">Access to exclusive webinars, workshops, and specialized mini-courses to expand your expertise.</p>
            </div>
            
            {/* Business Listing Card */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Listing</h3>
              <p className="text-gray-600">Get featured in our directory of certified nutrition coaches, helping potential clients find you.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certification Holders - REMOVING THIS SECTION */}
      {/* <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Join Thousands of Certified Nutrition Coaches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/coach-1.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm mb-3">Certified 2021 • Sports Nutritionist</p>
                <p className="text-gray-700">"The Nutrition Academy certification helped me launch my sports nutrition practice and work with professional athletes."</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/coach-2.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">Michael Chen</h3>
                <p className="text-gray-600 text-sm mb-3">Certified 2020 • Wellness Coach</p>
                <p className="text-gray-700">"I've built a six-figure coaching business helping busy professionals transform their health through proper nutrition."</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/coach-3.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">Jessica Martinez</h3>
                <p className="text-gray-600 text-sm mb-3">Certified 2022 • Weight Management Specialist</p>
                <p className="text-gray-700">"The certification gave me the confidence and credibility to launch my online coaching program for sustainable weight loss."</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/coach-4.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">David Williams</h3>
                <p className="text-gray-600 text-sm mb-3">Certified 2019 • Corporate Wellness Coach</p>
                <p className="text-gray-700">"I've partnered with Fortune 500 companies to implement nutrition programs that have improved employee health and productivity."</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Use the Testimonials component instead of inline coach testimonials */}
      <Testimonials />
      
      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">What Our Students Say</h2>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={() => {
                const container = document.getElementById('testimonials-container');
                if (container) {
                  container.scrollBy({ left: -container.clientWidth / 2, behavior: 'smooth' });
                }
              }}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={() => {
                const container = document.getElementById('testimonials-container');
                if (container) {
                  container.scrollBy({ left: container.clientWidth / 2, behavior: 'smooth' });
                }
              }}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Scrollable testimonials container */}
            <div 
              id="testimonials-container"
              className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"The Nutrition Academy program exceeded my expectations. The content is comprehensive yet practical, and the business development module was exactly what I needed to launch my coaching practice."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" 
                        alt="Emily Thompson"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Emily Thompson</h4>
                      <p className="text-gray-600 text-sm">Health Coach • Chicago, IL</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"As a personal trainer looking to expand my services, this certification gave me the nutrition knowledge and coaching tools to provide complete wellness solutions for my clients."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=200&auto=format&fit=crop" 
                        alt="Marcus Johnson"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Marcus Johnson</h4>
                      <p className="text-gray-600 text-sm">Personal Trainer • Austin, TX</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-gray-400" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"The supportive community and mentor guidance were instrumental in my success. I'm now running nutrition workshops and one-on-one coaching sessions with confidence."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop" 
                        alt="Sophia Rodriguez"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Sophia Rodriguez</h4>
                      <p className="text-gray-600 text-sm">Wellness Educator • Miami, FL</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 4 (New) */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"I was hesitant to invest in another certification, but Nutrition Academy was worth every penny. Their systematic approach and focus on practical application set them apart from other programs I've tried."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                        alt="James Wilson"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">James Wilson</h4>
                      <p className="text-gray-600 text-sm">Fitness Studio Owner • Denver, CO</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 5 (New) */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"As a registered nurse, I wanted to provide better nutritional guidance to my patients. This certification gave me evidence-based tools that integrate perfectly with my clinical practice."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                        alt="Amanda Taylor"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Amanda Taylor</h4>
                      <p className="text-gray-600 text-sm">Registered Nurse • Boston, MA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 6 (New) */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"The business development resources alone were worth the investment. Within three months of completing the certification, I launched my online practice and secured my first 10 clients."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop" 
                        alt="Daniel Kim"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Daniel Kim</h4>
                      <p className="text-gray-600 text-sm">Online Nutrition Coach • Seattle, WA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 7 (New) */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"After years of struggling with my own health issues, I decided to help others. The Nutrition Academy provided exactly what I needed to translate my personal experience into professional expertise."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=200&auto=format&fit=crop" 
                        alt="Rebecca Allen"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Rebecca Allen</h4>
                      <p className="text-gray-600 text-sm">Holistic Health Coach • Portland, OR</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 8 (New) */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-start">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"As a chef, I wanted to expand my understanding of nutrition to enhance my culinary offerings. This program bridged the gap perfectly and helped me launch my meal prep service for athletes."</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=200&auto=format&fit=crop" 
                        alt="Thomas Foster"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Thomas Foster</h4>
                      <p className="text-gray-600 text-sm">Chef & Nutrition Consultant • New Orleans, LA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>
      
      <Pricing />
      <Bonus />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home; 