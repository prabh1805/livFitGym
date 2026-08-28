import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { branchesData } from "../data/branchesData";

const LocationSection = () => {
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);
  const [loadedMapId, setLoadedMapId] = useState(null);
  const activeBranch = branchesData[activeBranchIndex];
  const isMapLoading = loadedMapId !== activeBranch.id;

  const showPreviousBranch = () => {
    setActiveBranchIndex((currentIndex) =>
      currentIndex === 0 ? branchesData.length - 1 : currentIndex - 1,
    );
  };

  const showNextBranch = () => {
    setActiveBranchIndex((currentIndex) =>
      currentIndex === branchesData.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section
      id="location"
      className="py-24 bg-[#0a0a0a] border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Our <span className="text-accent">Location</span>
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
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-accent font-bold uppercase tracking-[0.25em] text-sm mb-4">
                  Branch {activeBranchIndex + 1} of {branchesData.length}
                </p>
                <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wide mb-4">
                  {activeBranch.name}
                </h3>

                <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed max-w-sm">
                  {activeBranch.address}
                </p>

                <a
                  href={activeBranch.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-accent text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 max-w-max shadow-[0_4px_20px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)]"
                >
                  Get Directions
                </a>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-12">
              <button
                type="button"
                onClick={showPreviousBranch}
                aria-label="Show previous location"
                title="Previous location"
                className="w-11 h-11 rounded-full border border-neutral-700 text-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <span aria-hidden="true" className="text-xl">
                  &#8592;
                </span>
              </button>
              <div className="flex gap-2 px-2" aria-label="Location selector">
                {branchesData.map((branch, index) => (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setActiveBranchIndex(index)}
                    aria-label={`Show ${branch.name}`}
                    aria-current={
                      index === activeBranchIndex ? "true" : undefined
                    }
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeBranchIndex ? "w-8 bg-accent" : "w-2 bg-neutral-600 hover:bg-gray-400"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={showNextBranch}
                aria-label="Show next location"
                title="Next location"
                className="w-11 h-11 rounded-full border border-neutral-700 text-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <span aria-hidden="true" className="text-xl">
                  &#8594;
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 min-h-100 lg:min-h-full bg-neutral-900 relative"
            aria-busy={isMapLoading}
          >
            {isMapLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-neutral-900 text-gray-300">
                <span className="h-10 w-10 rounded-full border-4 border-neutral-700 border-t-accent animate-spin" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Loading map
                </span>
              </div>
            )}
            <iframe
              key={activeBranch.id}
              src={`https://www.google.com/maps?q=${encodeURIComponent(activeBranch.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeBranch.name} map`}
              onLoad={() => setLoadedMapId(activeBranch.id)}
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
