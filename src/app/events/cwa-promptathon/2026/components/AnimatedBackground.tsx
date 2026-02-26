"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Particle component with framer-motion animations and hover effect
const Particle = ({ delay, durationOffset, x, y, size, color }: { delay: number; durationOffset: number; x: string; y: string; size: number; color: string }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -100, 0],
      x: [0, 20, -20, 0],
      opacity: [0.1, 0.4, 0.1],
      scale: [1, 1.5, 1],
    }}
    transition={{ duration: 6 + durationOffset, repeat: Infinity, delay, ease: "easeInOut" }}
    whileHover={{ scale: 2.5, opacity: 0.8, filter: "blur(0px)" }}
  />
);

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<
    { id: number; x: string; y: string; delay: number; durationOffset: number; size: number; color: string }[]
  >([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 40;
    const colors = ["bg-primary/30", "bg-accent/30", "bg-neon-cyan/30", "bg-neon-purple/30"];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        durationOffset: Math.random() * 5,
        size: 1 + Math.random() * (isMobile ? 2 : 3),
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    );

    const styleSheet = document.styleSheets[0];
    const rules = [
      `@keyframes scan-line {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }`,
      `@keyframes grid-pulse {
        0%, 100% { opacity: 0.05; }
        50% { opacity: 0.15; }
      }`
    ];

    rules.forEach(rule => {
      const ruleName = rule.match(/@keyframes\s+([^\s{]+)/)?.[1];
      if (ruleName && ![...styleSheet.cssRules].some(r => r.cssText.includes(`@keyframes ${ruleName}`))) {
        styleSheet.insertRule(rule, styleSheet.cssRules.length);
      }
    });
  }, []);

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(hsl(var(--p) / 0.1) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--p) / 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px',
    animation: "grid-pulse 10s ease-in-out infinite",
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-base-100">
      {/* Grid overlay */}
      <div className="absolute inset-0" style={gridBackgroundStyle} />

      {/* Hexagon pattern overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Scan line effect - Restored Visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_15px_rgba(143,39,224,0.2)] opacity-20 dark:opacity-40" style={{ animation: "scan-line 12s linear infinite" }} />
      </div>

      {/* Large gradient orbs with theme-aware opacities - Performance optimized for mobile */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-30, 30, -30], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] rounded-full blur-[80px] sm:blur-[160px] opacity-[0.05] dark:opacity-[0.15]"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)", top: "-20%", left: "-20%" }}
      />
      <motion.div
        animate={{ x: [30, -30, 30], y: [40, -40, 40], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] rounded-full blur-[70px] sm:blur-[140px] opacity-[0.04] dark:opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #BC13FE 0%, transparent 70%)", top: "30%", right: "-15%" }}
      />
      <motion.div
        animate={{ x: [-10, 10, -10], y: [20, -20, 20], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full blur-[60px] sm:blur-[120px] opacity-[0.03] dark:opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #8f27e0 0%, transparent 70%)", bottom: "-10%", left: "10%" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} durationOffset={p.durationOffset} x={p.x} y={p.y} size={p.size} color={p.color} />
      ))}

      {/* Geometric shapes with glowing borders */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-32 h-32 sm:w-64 sm:h-64 border border-primary/20 rounded-3xl shadow-[0_0_20px_rgba(143,39,224,0.1)]"
        style={{ top: "10%", right: "5%", rotate: "15deg" }}
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 sm:w-96 sm:h-96 border border-neon-cyan/10 rounded-full shadow-[0_0_25px_rgba(0,240,255,0.05)]"
        style={{ bottom: "5%", left: "-5%" }}
      />

      {/* Connecting lines with path animation */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <motion.path
          d="M 100 200 Q 400 50 700 300 T 1200 100"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="1"
          strokeDasharray="10 10"
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 200 800 Q 600 900 900 600 S 1300 1000 1600 700"
          fill="none"
          stroke="#BC13FE"
          strokeWidth="1"
          strokeDasharray="15 15"
          animate={{ pathOffset: [0, -1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
