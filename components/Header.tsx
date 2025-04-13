import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position to add shadow after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Improved navigation helper function with header offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Update URL hash without causing a page jump
      history.pushState(null, '', '#' + id);
      
      // Account for fixed header height
      const headerOffset = 70; // Reduced from 80 to match smaller header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // Use the same scrolling mechanism as in _document.tsx
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container-custom py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/Logo.png" 
              alt="Nutrition Academy Logo" 
              width={180} 
              height={50} 
              className="w-auto h-10 md:h-12"
            />
          </Link>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-800 hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-gray-800 hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-800 hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('faq');
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="btn btn-primary py-2 px-4"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-3 border-t mt-2`}>
          <ul className="space-y-3">
            <li>
              <a 
                href="#features" 
                className="block text-gray-800 hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="block text-gray-800 hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pricing');
                }}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="block text-gray-800 hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faq');
                }}
              >
                FAQ
              </a>
            </li>
            <li className="pt-2">
              <a 
                href="#contact" 
                className="block btn btn-primary w-full text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header; 