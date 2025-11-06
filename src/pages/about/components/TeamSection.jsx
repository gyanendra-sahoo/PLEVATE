import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1731982648756-bb7f2d994834",
    imageAlt: "Professional portrait of Marcus Chen, confident Asian man in black shirt with arms crossed",
    expertise: ["Brand Strategy", "Creative Direction", "Design Systems"],
    philosophy: `"Great brands aren't born from focus groups—they're forged from conviction and crafted with precision."`,
    experience: "12 years",
    background: "Former Creative Director at Pentagram, led rebrands for Fortune 500 companies"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "Strategy Director",
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    imageAlt: "Professional headshot of Sarah Rodriguez, confident Latina woman with dark hair in navy blazer",
    expertise: ["Market Research", "Brand Positioning", "Consumer Psychology"],
    philosophy: `"Strategy without insight is just guessing. We dig deeper to find the truth that makes brands unstoppable."`,
    experience: "10 years",
    background: "Ex-McKinsey consultant, specialized in brand transformation for disruptive startups"
  },
  {
    id: 3,
    name: "David Kim",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1700168664856-133124b59170",
    imageAlt: "Professional portrait of David Kim, focused Korean man with glasses in white shirt",
    expertise: ["Visual Identity", "Digital Design", "Motion Graphics"],
    philosophy: `"Design isn't decoration—it's communication. Every pixel should have a purpose and pack a punch."`,
    experience: "8 years",
    background: "Award-winning designer, former lead at IDEO, expertise in design thinking methodology"
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    imageAlt: "Professional headshot of Emma Thompson, confident blonde woman in black blazer smiling",
    expertise: ["Brand Architecture", "Messaging", "Content Strategy"],
    philosophy: `"Words shape worlds. The right message at the right moment can transform a business overnight."`,
    experience: "7 years",
    background: "Former brand strategist at Wieden+Kennedy, led campaigns for Nike and Coca-Cola"
  }];


  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">

          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-none">
            The Forge Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just colleagues—we're co-conspirators in the mission to make brands impossible to ignore. 
            Each team member brings a unique perspective to the creative process.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers?.map((member, index) =>
          <motion.div
            key={member?.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group">

              <div className="bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                  src={member?.image}
                  alt={member?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 text-sm font-bold">
                    {member?.experience}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-primary mb-2 leading-tight">
                      {member?.name}
                    </h3>
                    <p className="text-accent font-semibold text-lg">
                      {member?.role}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member?.expertise?.map((skill, skillIndex) =>
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-concrete-light text-primary text-sm font-semibold border border-concrete">

                        {skill}
                      </span>
                  )}
                  </div>

                  {/* Philosophy Quote */}
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6 border-l-4 border-accent pl-4">
                    {member?.philosophy}
                  </blockquote>

                  {/* Background */}
                  <div className="pt-4 border-t border-concrete-light">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member?.background}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center">

          <div className="bg-concrete-light border-2 border-concrete p-12">
            <Icon name="Users" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-black text-primary mb-6 leading-tight">
              Culture of Creative Rebellion
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're united by a shared belief that brands should be bold, not bland. Our team culture celebrates 
              creative rebellion, strategic thinking, and the relentless pursuit of work that makes a difference. 
              We don't just work together—we challenge each other to push boundaries and create the impossible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TeamSection;