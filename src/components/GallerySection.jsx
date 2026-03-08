import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  "/assets/gymGallery/DSC_0052.jpeg",
  "/assets/gymGallery/DSC_0067.jpeg",
  "/assets/gymGallery/DSC_0069.jpeg",
  "/assets/gymGallery/DSC_0101.jpeg",
  "/assets/gymGallery/DSC_0103.jpeg",
  "/assets/gymGallery/DSC_0104.jpeg",
  "/assets/gymGallery/DSC_0203.jpeg",
  "/assets/gymGallery/DSC_0204.jpeg",
];

const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#050505] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Gym <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Take a look inside our premium fitness facility
          </p>
        </motion.div>

        {/* Auto-scrolling Transitional Slideshow */}
        <div className="relative mt-12 py-10 overflow-hidden">
          <motion.div 
            className="flex gap-6 md:gap-8"
            animate={{ 
              x: ["0%", "-33.33%"] 
            }}
            transition={{ 
              duration: 40, 
              ease: "linear", 
              repeat: Infinity 
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedImages.map((src, index) => (
              <motion.div 
                key={`${src}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => setSelectedImage(src)}
                className="relative w-[300px] sm:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-accent/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)]"
              >
                <img 
                  src={src} 
                  alt={`Gym facility ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-bold tracking-widest uppercase">
                    View facility
                  </span>
                </div>

                {/* Magnify Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Edge Gradients for smooth transition */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Fullscreen gallery view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
