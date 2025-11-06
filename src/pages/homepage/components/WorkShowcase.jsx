import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "../../../components/AppImage";

const WorkShowcase = () => {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 1,
      title: "TECHFLOW REBRAND",
      category: "FINTECH",
      image: "https://images.unsplash.com/photo-1717037536218-abb38d2305a9",
      alt: "Modern fintech interface design with clean typography and data visualization",
    },
    {
      id: 2,
      title: "ECOVIBE LAUNCH",
      category: "FASHION",
      image: "https://images.unsplash.com/photo-1638423045236-c48b7a56c3bd",
      alt: "Sustainable fashion brand showcase with eco-friendly packaging design",
    },
    {
      id: 3,
      title: "MEDICORE PLATFORM",
      category: "HEALTHCARE",
      image: "https://images.unsplash.com/photo-1665735373302-5eea4d200055",
      alt: "Healthcare technology platform with user-friendly interface design",
    },
  ];

  const motionProps = shouldReduceMotion
    ? { initial: false, animate: false }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.4, ease: "easeOut" },
      };

  const cardHover = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02, y: -6 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 260, damping: 18 },
      };

  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="brutalist-container">

        {/* HEADER */}
        <motion.div className="text-center mb-10 sm:mb-12 px-4" {...motionProps}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl brutalist-heading text-primary mb-3">
            WORK THAT WORKS
          </h2>
          <p className="text-base sm:text-lg brutalist-text text-foreground">
            Results speak louder than awards and accolades.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="brutalist-grid gap-4 sm:gap-6 p-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
              {...motionProps}
            >
              <motion.div
                className="brutalist-border brutalist-shadow bg-background cursor-pointer group transform-gpu"
                {...cardHover}
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-52 sm:h-60 lg:h-64 object-cover brutalist-border-thin transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-4 sm:p-6 transition-colors duration-300 group-hover:bg-gray-50">
                  <div className="text-[10px] sm:text-xs font-black text-accent mb-2 group-hover:text-red-600 transition-colors">
                    {project.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-primary group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WorkShowcase);
