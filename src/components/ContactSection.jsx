import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Contact <span className="text-[#ff0000]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            We're here to help you start your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 hover:border-[#ff0000]/30 transition-all duration-300 flex flex-col items-center text-center">
            <div className="bg-[#ff0000]/10 p-5 rounded-full mb-6 relative group">
              <svg className="w-10 h-10 text-[#ff0000] group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Call Us</h3>
            <p className="text-gray-400 font-light mb-4">Mon-Sat from 6am to 10pm.</p>
            <a href="tel:+919876543210" className="text-2xl font-semibold text-[#ff0000] hover:text-white transition-colors duration-300">
              +91 9876543210
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 hover:border-[#ff0000]/30 transition-all duration-300 flex flex-col items-center text-center">
            <div className="bg-[#ff0000]/10 p-5 rounded-full mb-6 relative group">
              <svg className="w-10 h-10 text-[#ff0000] group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Email Us</h3>
            <p className="text-gray-400 font-light mb-4">We'll respond within 24 hours.</p>
            <a href="mailto:contact@livfitgym.com" className="text-xl font-semibold text-[#ff0000] hover:text-white transition-colors duration-300">
              contact@livfitgym.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
