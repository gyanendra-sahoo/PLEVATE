import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import BriefFormPopup from "../../../components/BriefFormPopup";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [counters, setCounters] = useState({
    brands: 0,
    success: 0,
    growth: 0,
  });

  /* ---- Optimized Counter Animation ---- */
  useEffect(() => {
    if (shouldReduceMotion) {
      setCounters({ brands: 150, success: 98, growth: 5 });
      return;
    }

    let start = 0;
    const end = { brands: 150, success: 98, growth: 5 };
    const duration = 1200;
    const startTime = performance.now();

    const animateCount = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);

      setCounters({
        brands: Math.floor(end.brands * progress),
        success: Math.floor(end.success * progress),
        growth: Math.floor(end.growth * progress),
      });

      if (progress < 1) requestAnimationFrame(animateCount);
    };

    requestAnimationFrame(animateCount);
  }, [shouldReduceMotion]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const handleViewWork = () => navigate("/case-study");

  /* ---- Motion Config ---- */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statPill = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const floating = {
    y: [-6, 6, -6],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  };

  const motionProps = shouldReduceMotion
    ? { initial: false, animate: false }
    : { initial: "hidden", animate: "visible", variants: container };

  return (
    <section className="min-h-screen bg-background px-4 sm:px-6">
      <div className="brutalist-container min-h-screen flex items-center">
        <div className="brutalist-grid w-full items-center">

          {/* LEFT CONTENT */}
          <motion.div className="col-span-12 lg:col-span-8 p-4 sm:p-6 lg:p-8" {...motionProps}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-8xl brutalist-heading text-primary mb-3 sm:mb-4 break-words"
              variants={fadeUp}
            >
              MAKE BRANDS IMPOSSIBLE TO IGNORE
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-3xl brutalist-text text-foreground mb-8 sm:mb-12"
              variants={fadeUp}
            >
              Strategic creativity that cuts through noise and drives results.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16"
              variants={fadeUp}
            >
              <motion.div whileHover={!shouldReduceMotion && { scale: 1.04 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={openPopup}
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent text-white font-black px-8 sm:px-12 py-3 sm:py-4 brutalist-border brutalist-shadow uppercase tracking-wider"
                >
                  START A BRIEF
                </Button>
              </motion.div>

              <motion.div whileHover={!shouldReduceMotion && { scale: 1.04 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleViewWork}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-black px-8 sm:px-12 py-3 sm:py-4 brutalist-border brutalist-shadow uppercase tracking-wider"
                >
                  VIEW WORK
                </Button>
              </motion.div>
            </motion.div>

            {/* STATS */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
            >
              {[
                { value: counters.brands + "+", label: "BRANDS" },
                { value: counters.success + "%", label: "SUCCESS" },
                { value: counters.growth + "X", label: "GROWTH" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="brutalist-border brutalist-shadow p-3 sm:p-6 bg-background text-center"
                  variants={statPill}
                >
                  <div className="text-2xl sm:text-4xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm brutalist-text">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="col-span-12 lg:col-span-4 p-4 sm:p-6 lg:p-8 flex justify-center"
            animate={!shouldReduceMotion ? floating : {}}
          >
            <div className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-none h-60 sm:h-80 lg:h-96 brutalist-border brutalist-shadow bg-accent"></div>
          </motion.div>

        </div>
      </div>

      {/* POPUP */}
      <BriefFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  );
};

export default HeroSection;
