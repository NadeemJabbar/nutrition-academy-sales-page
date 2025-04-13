import React, { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleNavigation = () => {
      // Direct selectors for each section
      const featuresSec = document.getElementById('features');
      const pricingSec = document.getElementById('pricing');
      const faqSec = document.getElementById('faq');
      const contactSec = document.getElementById('contact');
      
      // All navigation links with hash anchors
      const navLinks = document.querySelectorAll('a[href^="#"]');
      
      // Add click event to all hash links
      navLinks.forEach(link => {
        link.addEventListener('click', (e: Event) => {
          e.preventDefault();
          
          const anchor = e.currentTarget as HTMLAnchorElement;
          const targetId = anchor.getAttribute('href')?.substring(1);
          if (!targetId) return;
          
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });
      
      console.log('Navigation handlers attached:', {
        'Features section exists': !!featuresSec,
        'Pricing section exists': !!pricingSec,
        'FAQ section exists': !!faqSec,
        'Contact section exists': !!contactSec,
        'Number of nav links': navLinks.length
      });
    };

    // Run as soon as DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleNavigation);
    } else {
      handleNavigation();
    }
    
    // Also run after full page load as a fallback
    window.addEventListener('load', handleNavigation);
    
    // Check if any errors were logged during initial rendering
    const originalError = console.error;
    console.error = (...args) => {
      // Log but handle certain known errors silently
      if (
        typeof args[0] === 'string' && 
        (args[0].includes('Warning:') || 
         args[0].includes('ReactDOM.render is no longer supported'))
      ) {
        // Just log without throwing
        return originalError(...args);
      }
      return originalError(...args);
    };

    return () => {
      document.removeEventListener('DOMContentLoaded', handleNavigation);
      window.removeEventListener('load', handleNavigation);
      console.error = originalError;
    };
  }, []);

  return (
    <ErrorBoundary>
      <Head>
        <title>Nutrition Academy Essentials Bundle</title>
        <meta name="description" content="Unlock Your Potential with the Nutrition Academy Essentials Bundle—Now for Over 50% Off!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp; 