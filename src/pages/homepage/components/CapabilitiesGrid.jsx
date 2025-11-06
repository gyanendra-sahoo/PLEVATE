import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const CapabilitiesGrid = () => {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    { id: 1, title: "BRAND STRATEGY", description: "Clear positioning that cuts through market noise." },
    { id: 2, title: "VISUAL IDENTITY", description: "Memorable design systems that demand attention." },
    { id: 3, title: "DIGITAL EXPERIENCE", description: "Interfaces that convert visitors into customers." },
    { id: 4, title: "CAMPAIGN CREATIVE", description: "Messages that stick and drive real results." }
  ];

  // Smooth minimal animation
  const containerVariants = shouldReduceMotion ? {} : {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    },
  };

  const hoverEffect = shouldReduceMotion ? {} : {
    whileHover: {
      scale: 1.03,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    whileTap: { scale: 0.97 }
  };

  return (
    <section className="py-16 sm:py-20 bg-muted px-4 sm:px-6">
      <div className="brutalist-container">

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl brutalist-heading text-primary mb-3 sm:mb-4 break-words">
            WHAT WE DO
          </h2>

          <p className="text-base sm:text-lg brutalist-text text-foreground">
            Four core services. Maximum impact.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.id}
              className="w-full"
              variants={fadeUp}
              {...hoverEffect}
            >
              <motion.div
                className="brutalist-border brutalist-shadow p-5 sm:p-8 bg-background h-full cursor-pointer overflow-hidden relative"
              >
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-primary mb-3 sm:mb-4">
                    {capability.title}
                  </h3>

                  <p className="text-sm sm:text-base brutalist-text text-foreground">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CapabilitiesGrid;
