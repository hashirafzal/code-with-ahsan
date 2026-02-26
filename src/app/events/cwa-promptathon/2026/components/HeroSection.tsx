"use client";

import { Calendar, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center group">
    <div className="bg-base-200/40 backdrop-blur-xl rounded-2xl px-3 py-2 sm:px-6 sm:py-4 min-w-[60px] sm:min-w-[90px] shadow-[0_0_20px_rgba(143,39,224,0.1)] border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
      <span className="text-xl sm:text-4xl font-bold font-mono bg-gradient-to-t from-primary to-accent bg-clip-text text-transparent">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs text-primary/70 mt-2 uppercase tracking-[0.2em] font-bold font-mono">
      {label}
    </span>
  </div>
);

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-03-28T10:00:00").getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const titleChars = "CWA Prompt-a-thon 2026".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Glows */}
      <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary shadow-[0_0_15px_rgba(143,39,224,0.1)]">
            <Zap className="w-4 h-4 animate-pulse" />
            Hackathon & Innovation Sprint
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative inline-block mb-8 w-full"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-mono tracking-tighter leading-[1.1] sm:leading-none break-words">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + (i * 0.03),
                  ease: [0.33, 1, 0.68, 1]
                }}
                className={char === " " ? "inline-block" : "inline-block bg-gradient-to-br from-neon-cyan via-primary to-neon-purple bg-clip-text text-transparent"}
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          {/* Subtle glow behind title */}
          <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 opacity-30 dark:opacity-50" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl text-base-content/60 mb-12 max-w-2xl mx-auto font-light"
        >
          Theme: <span className="text-base-content font-bold tracking-wide bg-primary/10 dark:bg-primary/20 px-4 py-1 rounded-lg border border-primary/20 dark:border-primary/30">Generative AI, Build with AI</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 text-sm font-mono text-base-content/50 mb-14"
        >
          <div className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <span className="group-hover:text-primary transition-colors">28th Mar, 2026</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-primary/30 hidden sm:block" />
          <div className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <span className="group-hover:text-primary transition-colors">10:00am – 7:00pm</span>
          </div>
        </motion.div>

        {/* Countdown - Optimized for mobile width */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 sm:gap-8 mb-16"
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <div className="text-primary/30 text-xl sm:text-3xl font-bold self-start mt-2 sm:mt-4 animate-pulse">:</div>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <div className="text-primary/30 text-xl sm:text-3xl font-bold self-start mt-2 sm:mt-4 animate-pulse">:</div>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <div className="text-primary/30 text-xl sm:text-3xl font-bold self-start mt-2 sm:mt-4 animate-pulse">:</div>
          <CountdownUnit value={timeLeft.seconds} label="Sec" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-primary to-neon-purple rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          <a href="#" className="btn btn-primary btn-lg min-w-[280px] font-black rounded-xl border-none bg-gradient-to-r from-primary to-neon-purple hover:shadow-[0_0_30px_rgba(143,39,224,0.4)] transition-all duration-300 relative">
            <span className="flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Register Now (Limit: 10 Teams)
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
