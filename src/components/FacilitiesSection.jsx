import React from 'react';
import { motion } from 'framer-motion';
import { facilitiesData } from '../data/facilitiesData';

const FacilityIcon = ({ name }) => {
  const getIconSvg = () => {
    switch(name) {
      case 'supplement':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />;
      case 'changing-room':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
      case 'cardio':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
      case 'training':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />;
      case 'shower':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />;
      case 'locker':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />;
      default:
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />;
    }
  };

  return (
    <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800 group-hover:border-[#ff0000] group-hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-300">
      <svg className="w-7 h-7 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {getIconSvg()}
      </svg>
    </div>
  );
};

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-24 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            World-Class <span className="text-[#ff0000]">Facilities</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Everything you need to reach your fitness goals under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilitiesData.map((facility, index) => (
            <motion.div 
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 hover:border-[#ff0000]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,0,0,0.1)] group cursor-default h-full"
            >
              <FacilityIcon name={facility.icon} />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{facility.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
