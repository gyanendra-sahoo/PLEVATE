import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "../../../components/AppImage";

const ClientLogos = () => {
  const shouldReduceMotion = useReducedMotion();

  const clients = [
    { id: 1, name: "TECHFLOW", logo: "https://cdn.pixabay.com/photo/2025/10/31/12/10/wolf-9928963_1280.jpg", logoAlt: "TechFlow company logo" },
    { id: 2, name: "ECOVIBE", logo: "https://cdn.pixabay.com/photo/2025/11/03/11/38/bird-9934203_1280.jpg", logoAlt: "EcoVibe sustainable fashion brand logo" },
    { id: 3, name: "MEDICORE", logo: "https://cdn.pixabay.com/photo/2025/11/02/11/58/mushroom-9932291_1280.jpg", logoAlt: "MediCore healthcare technology logo" },
    { id: 4, name: "URBANSPACE", logo: "https://cdn.pixabay.com/photo/2025/11/01/08/02/dahlia-9930364_1280.jpg", logoAlt: "UrbanSpace real estate company logo" },
    { id: 5, name: "FOODIEHUB", logo: "https://cdn.pixabay.com/photo/2025/11/02/15/17/nature-9932511_1280.jpg", logoAlt: "FoodieHub restaurant platform logo" },
    { id: 6, name: "GREENENERGY", logo: "https://cdn.pixabay.com/photo/2025/10/28/11/03/hedgehog-9922403_1280.jpg", logoAlt: "GreenEnergy renewable power company logo" }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="brutalist-container">

        {/* HEADER */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl brutalist-heading text-primary mb-3 sm:mb-4">
            TRUSTED BY LEADERS
          </h2>
          <p className="text-base sm:text-lg brutalist-text text-foreground">
            Brands that chose results over comfort zones.
          </p>
        </motion.div>

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid gap-4 sm:gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="p-3 sm:p-4 transform-gpu"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.9 }}
              whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <motion.div
                className="brutalist-border p-5 sm:p-6 bg-background h-20 sm:h-24 flex items-center justify-center relative overflow-hidden cursor-pointer group will-change-transform transform-gpu"
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300" />

                <div className="relative z-10 transform-gpu">
                  <Image
                    src={client.logo}
                    alt={client.logoAlt}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* FLOATING DECOR (lightweight animation) */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full transform-gpu"
              animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full transform-gpu"
              animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default ClientLogos;
