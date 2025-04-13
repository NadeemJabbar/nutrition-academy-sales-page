import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    // Only add mouse events on devices that support hover
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    
    const heroElement = heroRef.current;
    if (heroElement && supportsHover) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', () => setIsHovering(true));
      heroElement.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (heroElement && supportsHover) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  // Scroll function consistent with _document.tsx and Header.tsx
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Update URL hash without causing a page jump
      history.pushState(null, '', '#' + id);
      
      // Account for fixed header height
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // Use the same scrolling mechanism as in _document.tsx
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const spotlightSize = 4; // Reduced from 8 to 4 percent of container width

  return (
    <section 
      className="relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-gradient-to-r from-gray-900 to-black overflow-hidden pt-16 md:pt-20"
      ref={heroRef}
    >
      {/* Background container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grayscale version */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/Hero image.png"
            alt="Nutrition coaches with colorful fruits"
            fill
            className="object-cover object-center md:object-right grayscale"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Color version with spotlight mask - Only visible on devices that support hover */}
        {isHovering && (
          <div 
            className="absolute inset-0 w-full h-full transition-[clip-path] duration-100 hidden md:block"
            style={{
              clipPath: `circle(${spotlightSize}% at ${mousePosition.x}% ${mousePosition.y}%)`,
            }}
          >
            <Image 
              src="/images/Hero image.png"
              alt=""
              fill
              className="object-cover object-center md:object-right"
              priority
              sizes="100vw"
            />
          </div>
        )}
      </div>

      <div className="w-full px-5 sm:px-6 md:pl-16 md:pr-6 relative z-10 py-10 md:pb-14 md:mt-6">
        <div className="max-w-xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 leading-tight text-shadow-sm">
            Unlock Your Potential with the Nutrition Academy Essentials Bundle
          </h1>
          <p className="text-lg md:text-xl mb-4 md:mb-5 text-gray-100">
            Now for Over 50% Off!
          </p>
          
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 md:p-4 mb-4 md:mb-5 border border-gray-700">
            <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Dive into a world of opportunities with:</h2>
            <ul className="space-y-2 md:space-y-3 text-left mb-3 md:mb-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-2 md:ml-3 text-sm md:text-base">
                  <span className="font-bold">The Nutrition Academy Certification</span>—to help you master nutrition coaching, enabling you to change lives while doing what you love.
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-2 md:ml-3 text-sm md:text-base">
                  <span className="font-bold">The Coaching Career Kickstarter Course</span>—to help you transform your passion into a profitable business.
                </div>
              </li>
            </ul>
            
            <div className="text-left text-sm md:text-base">
              <p>Total value: <span className="line-through">$1,198</span></p>
              <p className="text-lg md:text-xl font-bold">Your special price: <span className="text-primary">$549 USD</span></p>
              <p>—or just <span className="text-primary font-bold">$59/month</span>.</p>
            </div>
          </div>
          
          <a 
            href="#pricing" 
            className="btn btn-primary text-sm md:text-lg px-6 md:px-8 py-2 md:py-3 shadow-lg hover:shadow-xl inline-block w-full sm:w-auto text-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pricing');
            }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 