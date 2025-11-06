import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Zap",
      title: "Brutal Honesty",
      description: `We strip away the unnecessary to reveal the powerful core. No fluff, no filler—just raw creative truth that cuts through market noise.`
    },
    {
      icon: "Target",
      title: "Impossible to Ignore",
      description: `Every brand we touch becomes a force that demands attention. We don't create wallflowers; we architect experiences that refuse to be forgotten.`
    },
    {
      icon: "Compass",
      title: "Strategic Precision",
      description: `Creative brilliance without strategy is just art. We combine raw creative power with surgical precision to deliver results that matter.`
    },
    {
      icon: "Layers",
      title: "Architectural Thinking",
      description: `Like brutalist architecture, we build brands with bold, uncompromising structures that stand the test of time and changing trends.`
    }
  ];

  const manifestoPoints = [
    "We believe brands should be bold, not bland",
    "Authenticity trumps perfection every time",
    "Great design is invisible until it\'s impossible to ignore",
    "Strategy without creativity is boring; creativity without strategy is useless",
    "The best brands don't follow trends—they create them"
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-none">
            Our Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We operate at the intersection of brutal honesty and creative brilliance. 
            Our philosophy isn't just about making things look good—it's about making them impossible to ignore.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {philosophyPrinciples?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background border-2 border-concrete p-8 h-full hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:border-accent transition-colors duration-300">
                      <Icon 
                        name={principle?.icon} 
                        size={24} 
                        className="text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">
                      {principle?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle?.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manifesto Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary p-12 border-4 border-primary brutalist-shadow"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 leading-tight">
              The Brand Forge Manifesto
            </h3>
            
            <div className="space-y-6">
              {manifestoPoints?.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-4"
                >
                  <div className="w-2 h-2 bg-accent flex-shrink-0"></div>
                  <p className="text-lg text-white font-medium leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t-2 border-accent"
            >
              <p className="text-xl text-accent font-bold leading-relaxed">
                This isn't just what we believe—it's how we build every brand we touch.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;