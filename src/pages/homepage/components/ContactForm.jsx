import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const ContactForm = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-14 sm:py-20 bg-primary">
      <div className="brutalist-container">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Header - Full width */}
          <motion.div
            className="md:col-span-2 p-4 sm:p-8 text-center transform-gpu"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-7xl brutalist-heading text-white mb-4 sm:mb-6">
              READY TO START?
            </h2>
            <p className="text-base sm:text-xl brutalist-text text-white max-w-2xl mx-auto mb-8 sm:mb-12">
              Stop blending in. Start demanding attention. Get results.
            </p>
          </motion.div>

          {/* Contact Info Box */}
          <motion.div
            className="p-3 sm:p-6 md:p-8 transform-gpu"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="brutalist-border brutalist-shadow p-6 sm:p-8 bg-background h-full">
              <h3 className="text-xl sm:text-2xl font-black text-primary mb-5 sm:mb-6">
                GET IN TOUCH
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-xs sm:text-sm font-black text-accent mb-1">EMAIL</div>
                  <div className="brutalist-text text-foreground text-sm sm:text-base">
                    hello@brandforge.com
                  </div>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-black text-accent mb-1">PHONE</div>
                  <div className="brutalist-text text-foreground text-sm sm:text-base">
                    +1 (555) 123-4567
                  </div>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-black text-accent mb-1">LOCATION</div>
                  <div className="brutalist-text text-foreground text-sm sm:text-base">
                    New York, NY
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button Box */}
          <motion.div
            className="p-3 sm:p-6 md:p-8 flex items-center transform-gpu"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="w-full text-center">
              <Button
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent text-white font-black px-6 sm:px-12 py-4 sm:py-6 
                           brutalist-border brutalist-shadow uppercase tracking-wider text-lg sm:text-xl w-full"
              >
                START YOUR PROJECT
              </Button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
