import React from 'react';
import { motion } from 'framer-motion';

const membershipData = [
  {
    id: 1,
    title: 'Monthly',
    price: '₹2500',
    duration: '+ GST extra',
    isPopular: false,
    benefits: [
      'Gym equipment access',
      'Locker access',
      'Changing room access',
      'Cardio zone access'
    ]
  },
  {
    id: 2,
    title: '3 Months',
    price: '₹6500',
    duration: '+ GST extra',
    isPopular: true,
    benefits: [
      'Gym equipment access',
      'Locker access',
      'Changing room access',
      'Cardio zone access'
    ]
  },
  {
    id: 3,
    title: '6 Months',
    price: '₹11500',
    duration: '+ GST extra',
    isPopular: false,
    benefits: [
      'Gym equipment access',
      'Locker access',
      'Changing room access',
      'Cardio zone access'
    ]
  },
  {
    id: 4,
    title: 'Yearly',
    price: '₹16000',
    duration: '+ GST extra',
    isPopular: false,
    benefits: [
      'Gym equipment access',
      'Locker access',
      'Changing room access',
      'Cardio zone access'
    ]
  }
];

const MembershipSection = () => {
  return (
    <section id="memberships" className="py-24 bg-[#050505] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Membership <span className="text-accent">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Choose the plan that fits your fitness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {membershipData.map((plan, index) => (
            <motion.div 
              key={plan.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className={`relative bg-[#121212] rounded-3xl p-8 flex flex-col border transition-colors duration-300 group ${
                plan.isPopular 
                  ? 'border-accent shadow-[0_0_30px_rgba(var(--accent-rgb),0.15)] z-10' 
                  : 'border-neutral-800 hover:border-neutral-600 mt-0 lg:mt-4'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-black px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-sm uppercase tracking-widest font-bold mb-2 ${plan.isPopular ? 'text-accent' : 'text-gray-400'}`}>
                  {plan.title}
                </h3>
                <div className="flex flex-col text-white">
                  <span className="text-4xl xl:text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 text-sm mt-2 font-medium">{plan.duration}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-gray-300 font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-md ${
                plan.isPopular 
                  ? 'bg-accent text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                  : 'bg-transparent border border-neutral-600 text-white hover:bg-white hover:text-black hover:border-white'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
