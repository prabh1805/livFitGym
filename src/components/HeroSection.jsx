import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';

const StatCounter = ({ end, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.floor(value)),
    });
    return () => controls.stop();
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-black text-[#ff0000] mb-2 font-mono">
        {count}{suffix}
      </span>
      <span className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center m-0 p-0 overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1651340048650-9bb75627f3de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwaW50ZXJpb3IlMjBkYXJrfGVufDF8fHx8MTc3Mjg3MjcyMXww&ixlib=rb-4.1.0&q=80&w=1080")'
          }} 
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-[#050505]"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full px-4 pt-20 pb-10 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 px-4 py-1.5 rounded-full border border-[#ff0000]/30 bg-[#ff0000]/10 backdrop-blur-sm"
          >
            <span className="text-[#ff0000] text-xs font-bold tracking-widest uppercase">Premium Fitness Experience</span>
          </motion.div>

          {/* Staggered text reveal */}
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Train Hard,
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#ff0000] uppercase tracking-tighter leading-none drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]"
            >
              Stay Strong.
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-gray-300 text-lg sm:text-2xl max-w-3xl mx-auto mb-12 font-medium tracking-wide"
          >
            Push your limits and redefine your strength with top-tier equipment and expert coaching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="relative group mb-20"
          >
            {/* Glow Behind Button */}
            <div className="absolute -inset-1 bg-[#ff0000] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <button 
              className="relative bg-[#ff0000] text-white px-10 py-5 sm:px-14 sm:py-6 rounded-full font-black text-lg sm:text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              Start Your Fitness Journey
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-neutral-800/80 pt-10"
          >
            <StatCounter end={10} label="Active Members" suffix="K+" />
            <StatCounter end={50} label="Expert Trainers" suffix="+" />
            <StatCounter end={15} label="Years Experience" suffix="+" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
