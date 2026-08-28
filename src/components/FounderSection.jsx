import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-24 bg-[#0a0a0a] border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-64 sm:w-80 shrink-0"
          >
            <div className="absolute -inset-2 bg-accent/20 rounded-[2rem] blur-xl"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-accent/30 shadow-2xl">
              <Image
                src="/assets/owner_photo/shivam_kumar.jpg"
                alt="Shivam Kumar - Founder of LIV FIT GYM Kalkaji"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              Meet The Founder
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3 mb-6">
              Shivam Kumar
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light max-w-2xl mx-auto lg:mx-0">
              Fitness became my calling long before it became my career. Over
              17+ years of coaching, I&apos;ve watched every trend and fad come
              and go — and I built LIV FIT GYM around the one thing that never
              changes: honest, disciplined training that actually works. No
              gimmicks, no shortcuts — just a coach who tells you the truth and
              a plan built around you.
            </p>
            <p className="text-accent text-xl font-bold italic">
              &quot;Strength isn&apos;t sold. It&apos;s earned — one honest rep
              at a time.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
