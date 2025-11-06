import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ProcessNavigation = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    { id: 1, number: "01", title: "DISCOVER", description: "Understand your market position and opportunities." },
    { id: 2, number: "02", title: "DEFINE", description: "Craft strategy that sets you apart." },
    { id: 3, number: "03", title: "DESIGN", description: "Create visual systems that convert." },
    { id: 4, number: "04", title: "DELIVER", description: "Launch with maximum market impact." }
  ];

  const containerVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 12 } },
    hover: { scale: 1.02, y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }
  };

  const numberHover = shouldReduceMotion ? {} : {
    hover: { scale: 1.08, rotate: [0, -4, 4, 0], transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="brutalist-container px-4">

        {/* HEADER */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
          whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl brutalist-heading text-primary mb-3">
            HOW WE WORK
          </h2>
          <p className="text-base sm:text-lg brutalist-text text-foreground">
            Four steps to transform your brand.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="brutalist-grid gap-4 sm:gap-6 p-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="brutalist-border brutalist-shadow p-6 sm:p-8 bg-background h-full relative overflow-hidden group cursor-pointer transform-gpu"
                whileHover={!shouldReduceMotion && { boxShadow: "8px 8px 0px rgba(0,0,0,0.3)" }}
              >

                {/* BG Hover Layer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.6 }}
                  whileHover={!shouldReduceMotion && { scale: 1 }}
                  transition={{ duration: 0.25 }}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <motion.div
                    className="text-3xl sm:text-4xl font-black text-accent mb-3 sm:mb-4"
                    variants={numberHover}
                    whileHover="hover"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-black text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base brutalist-text text-foreground group-hover:text-foreground/80 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Corner Decor */}
                <motion.div
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={!shouldReduceMotion && { scale: 1 }}
                />

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default memo(ProcessNavigation);
