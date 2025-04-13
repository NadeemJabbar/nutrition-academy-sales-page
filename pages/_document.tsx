import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#111827" /> {/* Dark gray to match site theme */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/* Add any additional meta tags, fonts, etc. here */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Execute after document is fully loaded for reliable DOM access
                document.addEventListener('DOMContentLoaded', function() {
                  console.log('DOM fully loaded - setting up scroll handlers');
                  
                  // Header height offset for scrolling (matches the fixed header height)
                  const headerOffset = 70;
                  
                  // Log available sections to help with debugging
                  setTimeout(() => {
                    console.log("Available sections:", {
                      features: document.getElementById('features'),
                      pricing: document.getElementById('pricing'),
                      faq: document.getElementById('faq'),
                      contact: document.getElementById('contact')
                    });
                  }, 1000);
                  
                  // Scroll function that accounts for fixed header
                  function scrollToElement(targetElement) {
                    if (!targetElement) return;
                    
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                  
                  // Handle initial hash in URL
                  if (window.location.hash) {
                    const targetId = window.location.hash.substring(1);
                    setTimeout(() => {
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        scrollToElement(targetElement);
                        console.log('Initial scroll to:', targetId);
                      } else {
                        console.error('Target element not found:', targetId);
                      }
                    }, 500);
                  }
                  
                  // Add click handlers to all anchor links
                  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                      e.preventDefault();
                      const targetId = this.getAttribute('href').substring(1);
                      const targetElement = document.getElementById(targetId);
                      
                      if (targetElement) {
                        // Update URL hash without causing a page jump
                        history.pushState(null, '', '#' + targetId);
                        
                        // Smooth scroll to target with offset
                        scrollToElement(targetElement);
                        console.log('Scrolling to:', targetId);
                      } else {
                        console.error('Target element not found:', targetId);
                      }
                    });
                  });
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 