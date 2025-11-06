import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? {}
    : {
        animate: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      };

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  const cardHover = shouldReduceMotion
    ? {}
    : {
        scale: 1.03,
        transition: { duration: 0.25, ease: "easeOut" },
      };

  const cards = [
    {
      id: "strategy",
      title: "STRATEGY",
      description: "Data-driven decisions that cut through market noise.",
      gradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      id: "design",
      title: "DESIGN",
      description: "Visual identity that stops scrolling and starts conversations.",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "results",
      title: "RESULTS",
      description: "Measurable impact that transforms businesses and drives growth.",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background px-4 sm:px-6">
      <div className="brutalist-container">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            className="col-span-1 sm:col-span-2 lg:col-span-3 p-4 sm:p-8 text-center"
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-7xl brutalist-heading text-primary mb-4 sm:mb-6 break-words">
              NO FLUFF. PURE RESULTS.
            </h2>
            <p className="text-base sm:text-xl brutalist-text text-foreground max-w-2xl mx-auto px-2">
              We build brands that demand attention through strategic creativity.
            </p>
          </motion.div>

          {/* Cards */}
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="w-full flex justify-center"
              variants={fadeUp}
            >
              <motion.div
                className="brutalist-border brutalist-shadow p-5 sm:p-6 bg-background w-full max-w-[360px] h-full cursor-pointer overflow-hidden relative group"
                whileHover={cardHover}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-primary mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base brutalist-text text-foreground">
                    {card.description}
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

export default AboutSection;
