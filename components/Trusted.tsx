import React from 'react';
import Image from 'next/image';

const Trusted: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-xl text-gray-600 mb-8">Trusted by Fortune 500 Companies</h2>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <Image 
              src="/images/trusted-companies.png" 
              alt="Trusted companies including Nike, Spurs, Toronto Maple Leafs, The New York Times, Seattle Seahawks, Livestrong, Peloton, TIME, and Carolina Panthers"
              width={900}
              height={100}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted; 