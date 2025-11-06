import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const coreValues = [
    {
      icon: "Shield",
      title: "Uncompromising Quality",
      description: "We'd rather lose a client than compromise our standards. Every project gets our full creative firepower, regardless of budget size.",
      principle: "Excellence isn\'t negotiable"
    },
    {
      icon: "Heart",
      title: "Authentic Partnerships",
      description: "We don't just work for our clients—we work with them. True collaboration creates brands that feel genuine and resonate deeply.",
      principle: "Partnership over vendor relationships"
    },
    {
      icon: "Zap",
      title: "Fearless Innovation",
      description: "Playing it safe is the riskiest strategy. We push boundaries, challenge conventions, and create solutions that didn't exist before.",
      principle: "Innovation requires courage"
    },
    {
      icon: "Target",
      title: "Results-Driven Creativity",
      description: "Beautiful work that doesn't drive business results is just expensive art. Every creative decision serves a strategic purpose.",
      principle: "Creativity with accountability"
    },
    {
      icon: "Users",
      title: "Diverse Perspectives",
      description: "The best ideas come from the collision of different viewpoints. We actively seek out voices that challenge our thinking.",
      principle: "Diversity drives innovation"
    },
    {
      icon: "Compass",
      title: "Ethical Leadership",
      description: "We use our creative power responsibly. The brands we build should make the world more interesting, not more manipulative.",
      principle: "Power with purpose"
    }
  ];

  const culturalElements = [
    {
      title: "No Bullshit Policy",
      description: "We say what we mean and mean what we say. Honest feedback, transparent processes, and authentic relationships."
    },
    {
      title: "Continuous Learning",
      description: "The creative industry evolves daily. We invest in our team\'s growth and stay ahead of emerging trends and technologies."
    },
    {
      title: "Work-Life Integration",
      description: "Great work comes from fulfilled people. We support our team\'s personal growth and respect their time outside the office."
    },
    {
      title: "Client Success Obsession",
      description: "Our success is measured by our clients\' success. We celebrate their wins as our own and learn from every challenge."
    }
  ];

  return (
    <section className="py-24 bg-background">
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
            What We Stand For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our values aren't wall decorations—they're the foundation of every decision we make, 
            every relationship we build, and every brand we forge.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues?.map((value, index) => (
            <motion.div
              key={value?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border-2 border-concrete p-8 h-full hover:border-accent transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:border-accent transition-colors duration-300">
                    <Icon 
                      name={value?.icon} 
                      size={28} 
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-primary leading-tight">
                    {value?.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value?.description}
                  </p>
                  
                  <div className="pt-4 border-t border-concrete-light">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                      {value?.principle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-concrete-light border-2 border-concrete p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-primary mb-6 leading-tight">
              How We Work Together
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our culture is built on mutual respect, creative courage, and the shared mission 
              to make every brand we touch impossible to ignore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {culturalElements?.map((element, index) => (
              <motion.div
                key={element?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border-2 border-concrete p-6 hover:border-accent transition-colors duration-300"
              >
                <h4 className="text-lg font-black text-primary mb-3 leading-tight">
                  {element?.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {element?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-primary p-12 border-4 border-primary brutalist-shadow">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              Ready to Join the Revolution?
            </h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              If you're tired of brands that blend in and ready to create something impossible to ignore, 
              we should talk. Let's forge something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold border-2 border-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="/case-study"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;