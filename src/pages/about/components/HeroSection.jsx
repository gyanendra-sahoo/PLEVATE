import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 concrete-texture opacity-30"></div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">

            <div className="space-y-6">
              <motion.h1
                className="text-5xl lg:text-7xl font-black text-primary leading-none tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>

                We Make Brands
                <span className="block text-accent">Impossible</span>
                <span className="block">to Ignore</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}>

                At the intersection of brutal honesty and creative brilliance, we architect brand experiences that demand attention and refuse to be forgotten.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-concrete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}>

              <div className="text-center">
                <div className="text-3xl font-black text-primary">150+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">8</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">95%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Client Retention</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative">

            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[600px] overflow-hidden border-4 border-primary brutalist-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1731511508481-983e1da5f0bd"
                  alt="Professional portrait of Brand Forge founder, confident man in black shirt against concrete wall background"
                  className="w-full h-full object-cover" />

                
                {/* Overlay Quote */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-6">
                  <blockquote className="text-white font-bold text-lg leading-tight">
                    "We don't create pretty designs. We architect experiences that make your competition irrelevant."
                  </blockquote>
                  <cite className="text-accent font-semibold text-sm mt-2 block">
                    — Marcus Chen, Founder & Creative Director
                  </cite>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-accent border-4 border-primary"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;