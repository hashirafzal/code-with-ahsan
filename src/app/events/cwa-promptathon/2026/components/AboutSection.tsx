"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const AboutSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is in view
          className="group relative bg-base-200/40 backdrop-blur-xl rounded-2xl p-8 sm:p-12 text-center sm:text-left border border-primary/10 dark:border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Top Accent Line (to match FeaturesSection) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          {/* Corner decoration */}
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg group-hover:border-primary/60 transition-colors duration-500" />

          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-primary">
              What is Prompt-a-thon 2026?
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base-content/70 leading-relaxed text-base sm:text-lg mb-5">
            The <span className="text-base-content font-semibold">Code With Ahsan Prompt-a-thon 2026</span> is an exciting
            Hackathon & Innovation Sprint focused on the theme of{" "}
            <span className="text-accent font-semibold">Generative AI & Build with AI</span>.
          </motion.p>
          <motion.p variants={itemVariants} className="text-base-content/70 leading-relaxed text-sm sm:text-base">
            This event brings together developers, AI enthusiasts, and problem-solvers to collaborate, build,
            and showcase innovative solutions using Generative AI. Whether you are a beginner or an expert,
            this hackathon provides a platform to pair program, receive mentorship from industry leaders,
            and build the future of tech together.
          </motion.p>

          {/* Terminal-style decoration */}
          <motion.div
            variants={itemVariants}
            className="mt-6 p-3 rounded-lg bg-neutral/50 font-mono text-xs text-neutral-content/70"
          >
            <span className="text-primary">$</span> build --theme="generative-ai" --mode="hackathon"
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary ml-1"
            >
              █
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
