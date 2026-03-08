import React from 'react';
import { motion } from 'framer-motion';

const workoutStories = [
  { name: 'Akash', image: '/assets/workoutStories/akash.jpeg' },
  { name: 'Narender', image: '/assets/workoutStories/narender.jpeg' },
  { name: 'Sameer', image: '/assets/workoutStories/sameer.jpeg' },
  { name: 'Subhakanta', image: '/assets/workoutStories/subhakanta.jpeg' },
  { name: 'Sushant', image: '/assets/workoutStories/sushant.jpeg' },
];

const duplicatedStories = [...workoutStories, ...workoutStories, ...workoutStories];

const StarRating = ({ count }) => {
  return (
    <div className="flex gap-1.5 mb-6">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="py-24 bg-[#0a0a0a] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Member <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Real results from our dedicated community
          </p>
        </motion.div>

        {/* Infinite Horizontal Scroll */}
        <div className="relative mt-8 py-10 overflow-hidden">
          <motion.div 
            className="flex gap-6 lg:gap-10"
            animate={{ 
              x: ["0%", "-33.33%"] 
            }}
            transition={{ 
              duration: 35, 
              ease: "linear", 
              repeat: Infinity 
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedStories.map((story, index) => (
              <motion.div 
                key={`${story.name}-${index}`}
                whileHover={{ scale: 1.05, y: -10 }}
                className="w-[280px] sm:w-[350px] flex-shrink-0 group relative aspect-[4/5] rounded-[32px] overflow-hidden border border-neutral-800/50"
              >
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                    Gym Journey
                  </span>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tight leading-tight">
                    {story.name}
                  </h3>
                </div>

                {/* Accent Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-[32px] transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Edge Fades */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
