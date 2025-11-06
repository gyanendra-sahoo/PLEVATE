import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FoundingStorySection = () => {
  const milestones = [
  {
    year: "2016",
    title: "The Spark",
    description: "Marcus Chen leaves Pentagram after realizing traditional agencies were playing it too safe. The idea for Brand Forge is born in a Brooklyn coffee shop.",
    icon: "Lightbulb"
  },
  {
    year: "2017",
    title: "First Rebellion",
    description: "Our first client, a fintech startup, sees 300% user growth after we completely reimagined their brand identity. The brutalist approach proves its worth.",
    icon: "TrendingUp"
  },
  {
    year: "2019",
    title: "Team Assembly",
    description: "Sarah Rodriguez joins from McKinsey, bringing strategic rigor to creative chaos. The Brand Forge methodology takes shape.",
    icon: "Users"
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Featured in Fast Company\'s \'Most Innovative Companies\' for our work with sustainable brands. The industry starts paying attention.",
    icon: "Award"
  },
  {
    year: "2024",
    title: "Global Impact",
    description: "150+ brands transformed, 95% client retention rate. Brand Forge becomes the go-to agency for companies ready to be impossible to ignore.",
    icon: "Globe"
  }];


  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">

          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-none">
            Our Origin Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Brand Forge wasn't born from a business plan—it was forged from frustration with an industry 
            that had forgotten how to be bold. Here's how we became the agency that makes brands impossible to ignore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">

            <div className="bg-background border-2 border-concrete p-8">
              <h3 className="text-2xl font-black text-primary mb-6 leading-tight">
                The Problem We Saw
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2016, the branding industry was drowning in safe choices and committee-approved mediocrity. 
                  Agencies were more concerned with pleasing everyone than creating something that mattered to anyone.
                </p>
                <p>
                  Marcus Chen, fresh from years at prestigious agencies, watched brilliant creative work get watered 
                  down by fear. Brands were becoming invisible in their quest to be inoffensive.
                </p>
                <p>
                  The market was screaming for authenticity, but agencies kept delivering vanilla. Something had to change.
                </p>
              </div>
            </div>

            <div className="bg-primary p-8 border-4 border-primary brutalist-shadow">
              <h3 className="text-2xl font-black text-white mb-6 leading-tight">
                The Solution We Built
              </h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Brand Forge was founded on a simple principle: brands should be impossible to ignore, 
                  not impossible to remember. We developed a methodology that strips away the unnecessary 
                  to reveal the powerful core.
                </p>
                <p className="text-accent font-semibold">
                  "We don't create brands that fit in—we create brands that stand out, 
                  speak up, and refuse to be forgotten."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">

            <h3 className="text-2xl font-black text-primary mb-8 leading-tight">
              Key Milestones
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-concrete"></div>
              
              {milestones?.map((milestone, index) =>
              <motion.div
                key={milestone?.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start space-x-6 pb-8">

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-accent border-4 border-primary flex items-center justify-center">
                    <Icon name={milestone?.icon} size={20} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-background border-2 border-concrete p-6 hover:border-accent transition-colors duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl font-black text-accent">{milestone?.year}</span>
                      <h4 className="text-lg font-black text-primary">{milestone?.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Founding Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20">

          <div className="relative h-96 overflow-hidden border-4 border-primary brutalist-shadow">
            <Image
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326"
              alt="Modern creative office space with concrete walls, large windows, and collaborative work areas representing Brand Forge's founding environment"
              className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-8">
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  From Frustration to Foundation
                </h3>
                <p className="text-lg leading-relaxed">
                  What started as one designer's rebellion against mediocrity became a movement that's transforming how brands think about their identity and impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FoundingStorySection;