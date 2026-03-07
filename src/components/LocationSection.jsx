import React from 'react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Our <span className="text-[#ff0000]">Location</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden">
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="bg-[#ff0000]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wide mb-4">
              LIV FIT GYM <span className="text-[#ff0000] block mt-1">Kalkaji</span>
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
              59/2 Guru Ravidas Marg<br/>
              Opp HDFC Bank<br/>
              Kalkaji<br/>
              New Delhi – 110019
            </p>
            
            <a 
              href="https://maps.google.com/?q=LIV+FIT+GYM+Kalkaji" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#ff0000] text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 max-w-max shadow-[0_4px_20px_rgba(255,0,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)]"
            >
              Get Directions
            </a>
          </motion.div>
          
          {/* Right Side: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 min-h-[400px] lg:min-h-full bg-neutral-900 relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6044733075677!2d77.2587784!3d28.5516001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5d6xxxxxx%3A0xxxxxxxxx!2sKalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="LIV FIT GYM Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
