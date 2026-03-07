import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Rohit Mehra",
    text: "I joined LIV FIT Gym 8 months ago and lost 12kg. The trainers and facilities are top-notch.",
    rating: 5,
    initials: "RM",
    bgColor: "bg-blue-600"
  },
  {
    id: 2,
    name: "Ankit Sharma",
    text: "Clean gym, great equipment and amazing energy. Highly recommended if you're serious about fitness.",
    rating: 5,
    initials: "AS",
    bgColor: "bg-green-600"
  },
  {
    id: 3,
    name: "Priya Kapoor",
    text: "Best gym in Kalkaji area. The cardio section and personal training helped me transform.",
    rating: 5,
    initials: "PK",
    bgColor: "bg-purple-600"
  }
];

const StarRating = ({ count }) => {
  return (
    <div className="flex gap-1.5 mb-6">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#ff0000]" fill="currentColor" viewBox="0 0 20 20">
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
            Member <span className="text-[#ff0000]">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Real results from our dedicated community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((story, index) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 lg:p-10 flex flex-col hover:border-[#ff0000]/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(255,0,0,0.05)] relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-neutral-800">
                <svg className="w-16 h-16 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <StarRating count={story.rating} />
              
              <blockquote className="flex-grow text-gray-300 text-lg font-light leading-relaxed mb-10 italic relative z-10">
                "{story.text}"
              </blockquote>
              
              <div className="flex items-center mt-auto relative z-10 border-t border-neutral-800/60 pt-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${story.bgColor} mr-4 shadow-lg ring-2 ring-neutral-800`}>
                  {story.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg tracking-wide">{story.name}</p>
                  <p className="text-gray-500 text-sm flex items-center mt-1 font-medium">
                    <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg> Google Review
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
