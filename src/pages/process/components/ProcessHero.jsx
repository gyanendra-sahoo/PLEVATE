import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessHero = () => {
  return (
    <section className="relative bg-background pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 concrete-texture opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider border-2 border-primary transform -rotate-1 mb-6">
              Our Methodology
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-6 leading-none">
              The Plevate
              <br />
              <span className="text-accent">Process</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four proven steps that transform ambitious brands into impossible-to-ignore market forces. 
              No fluff, no filler—just systematic brand architecture that delivers results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Clock" size={20} />
              <span className="font-medium">8-16 Week Timeline</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-concrete"></div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Users" size={20} />
              <span className="font-medium">Collaborative Partnership</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-concrete"></div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Target" size={20} />
              <span className="font-medium">Measurable Outcomes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;