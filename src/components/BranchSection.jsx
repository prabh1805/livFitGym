import React from 'react';
import { branchesData } from '../data/branchesData';

const BranchSection = () => {
  return (
    <section id="branches" className="py-20 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Our <span className="text-[#ffcc00]">Branch</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Find your nearest LIV FIT GYM location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {branchesData.map((branch) => (
            <div 
              key={branch.id} 
              className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 hover:border-[#ffcc00]/50 transition-all duration-300 md:col-start-2 lg:col-start-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#ffcc00]/10 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-[#ffcc00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{branch.name}</h3>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-400 font-light leading-relaxed">
                  {branch.address.split(',').map((part, index) => (
                    <span key={index} className="block">{part.trim()}{index !== branch.address.split(',').length - 1 ? ',' : ''}</span>
                  ))}
                </p>
              </div>

              <a 
                href={branch.mapUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-transparent border border-[#ffcc00] text-[#ffcc00] px-6 py-3 rounded-xl font-semibold tracking-wide hover:bg-[#ffcc00] hover:text-black transition-colors duration-300"
              >
                View on Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
