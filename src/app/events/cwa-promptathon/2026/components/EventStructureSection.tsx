"use client";

import { motion } from "framer-motion"; // Import motion
import { ExternalLink, Mail, FileText, Sparkles } from "lucide-react";

const EventStructureSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col gap-32 sm:gap-40">
        {/* Structure Header & Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-mono text-base-content tracking-tight">
              Event Structure
            </h2>
          </div>
          <p className="text-base-content/60 mb-12 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto font-light">
            Everything you need to know about the schedule, guidelines, and rules.
            Review the official structure to prepare your team for victory.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block group mb-16 relative">
            <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            <a
              href="#"
              className="relative btn btn-outline btn-primary btn-lg rounded-xl gap-3 px-8 border-2 hover:bg-primary/10"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-bold">View Structure Doc</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Sponsor card with consistent spacing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          variants={itemVariants}
          className="relative pt-12 sm:pt-8" // Increased top padding for safe badge placement
        >
          <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-neon-cyan/10 rounded-3xl blur-xl opacity-20 pointer-events-none" />
          <div className="relative bg-base-200/40 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-primary/10 dark:border-white/10 shadow-2xl group"> {/* Removed overflow-hidden here */}

            {/* Animated background element for sponsor card - Reduced movement and added pointer-events-none */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            />

            {/* Sponsorship Badge - Improved Z-index, stability and added hover effect */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(143, 39, 224, 0.3)" }}
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md text-[10px] sm:text-xs font-black font-mono text-primary shadow-lg shadow-primary/20 uppercase tracking-[0.2em] whitespace-nowrap cursor-pointer transition-colors duration-300"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Sponsorship Open
              </motion.div>
            </motion.div>

            <div className="flex flex-col items-center gap-6 relative z-10 pt-4 sm:pt-0 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black font-mono text-base-content tracking-tight">
                  Fuel the Innovation
                </h3>
                <p className="text-base-content/60 text-sm sm:text-base font-light max-w-md mx-auto">
                  Partner with us to support the Pakistani AI developer community.
                  Get your brand in front of top talent.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <a href="mailto:maham.visionwiseab@gmail.com" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-base-200/50 border border-primary/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-xs sm:text-sm font-mono text-primary group/link">
                  <span className="opacity-70 group-hover/link:opacity-100 transition-opacity">maham.visionwiseab@gmail.com</span>
                </a>
                <a href="mailto:ahsan.ubitian@gmail.com" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-base-200/50 border border-primary/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-xs sm:text-sm font-mono text-primary group/link">
                  <span className="opacity-70 group-hover/link:opacity-100 transition-opacity">ahsan.ubitian@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>

  );
};

export default EventStructureSection;
