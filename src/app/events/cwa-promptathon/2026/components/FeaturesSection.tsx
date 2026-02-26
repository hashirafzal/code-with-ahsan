"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Users, GraduationCap, Rocket, type LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string; color: string }[] = [
  {
    icon: Users,
    title: "Collaboration",
    description: "Experts and beginners coding side-by-side. Cultivating the next generation of engineers.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Mentors guiding teams, providing real-time code reviews and architectural advice.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Build incredible AI apps, scaling ideas to reality in a high-energy sprint.",
    color: "primary",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const isPrimary = feature.color === "primary";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative bg-base-200/40 backdrop-blur-xl rounded-2xl p-8 text-center border border-primary/10 dark:border-white/10 hover:border-primary/40 transition-colors duration-500 overflow-hidden shadow-2xl"
    >
      {/* Mouse Tracking Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${isPrimary ? 'rgba(143, 39, 224, 0.15)' : 'rgba(0, 240, 255, 0.15)'},
              transparent 80%
            )
          `,
        }}
      />

      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${isPrimary ? 'via-primary' : 'via-neon-cyan'} to-transparent opacity-50`} />

      {/* Icon with Glowing Backdrop */}
      <div className="relative mb-6 inline-block">
        <div className={`absolute inset-0 blur-2xl opacity-20 ${isPrimary ? 'bg-primary' : 'bg-neon-cyan'}`} />
        <div className={`relative w-16 h-16 rounded-2xl ${isPrimary ? 'bg-primary/10 border-primary/20' : 'bg-neon-cyan/10 border-neon-cyan/20'} border flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <feature.icon className={`w-8 h-8 ${isPrimary ? 'text-primary' : 'text-neon-cyan'}`} />
        </div>
      </div>

      <h3 className="text-xl font-black font-mono text-base-content mb-4 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-base-content/60 text-sm leading-relaxed font-light">
        {feature.description}
      </p>

      {/* Dynamic corner decoration */}
      <div className={`absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 ${isPrimary ? 'border-primary/20' : 'border-neon-cyan/20'} rounded-br-lg group-hover:border-primary/60 transition-colors duration-500`} />
    </motion.div>
  );
};

const FeaturesSection = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="bg-base-100 py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="text-2xl sm:text-3xl font-bold font-mono text-center text-primary mb-10 sm:mb-14"
        >
          Why Join the Sprint?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
