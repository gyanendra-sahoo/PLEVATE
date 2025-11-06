import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProcessCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none">
            Ready to Start
            <br />
            <span className="text-accent">Your Journey?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Every impossible-to-ignore brand starts with a single conversation. 
            Let's discuss your vision and map out your path to market dominance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              asChild
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow hover:shadow-none transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link to="/contact">
                Start Your Brief
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold px-8 py-4 text-lg"
            >
              <Link to="/case-study">
                See Our Work
                <Icon name="ExternalLink" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Process Confidence Builders */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 border-2 border-primary-foreground/20 p-6"
            >
              <Icon name="Shield" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Process</h3>
              <p className="text-primary-foreground/80">
                Our methodology has transformed 200+ brands across industries. 
                Every step is tested, refined, and results-driven.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 border-2 border-primary-foreground/20 p-6"
            >
              <Icon name="Users" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">True Partnership</h3>
              <p className="text-primary-foreground/80">
                We're not vendors—we're strategic partners invested in your success. 
                Your wins are our wins, your challenges are ours to solve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 border-2 border-primary-foreground/20 p-6"
            >
              <Icon name="Target" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
              <p className="text-primary-foreground/80">
                Every project includes clear success metrics and performance tracking. 
                We measure impact, not just aesthetics.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessCTA;