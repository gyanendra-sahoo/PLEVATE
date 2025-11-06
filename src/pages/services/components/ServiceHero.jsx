import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-accent"></div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Capabilities Matrix
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-tight">
              Services That Make Brands
              <span className="block text-accent">Impossible to Ignore</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our brutalist approach strips away the unnecessary to reveal the powerful core of your brand. 
              Each service is architected to demand attention and refuse to be forgotten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start a Brief
              </Button>
              <Button
                variant="outline"
                iconName="Play"
                iconPosition="left"
              >
                See Our Process
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-concrete-light">
              <div>
                <div className="text-2xl font-black text-accent">150+</div>
                <div className="text-xs text-muted-foreground">Brands Transformed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">6-12</div>
                <div className="text-xs text-muted-foreground">Weeks Timeline</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">300%</div>
                <div className="text-xs text-muted-foreground">Avg. Recognition Boost</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Block */}
              <div className="w-full h-96 bg-primary border-2 border-primary relative overflow-hidden">
                <div className="absolute inset-4 bg-accent border-2 border-primary flex items-center justify-center">
                  <Icon name="Layers" size={80} color="#FFFFFF" />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-conversion border-2 border-primary flex items-center justify-center"
                >
                  <Icon name="Zap" size={24} color="#FFFFFF" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-background border-2 border-primary flex items-center justify-center"
                >
                  <Icon name="Target" size={16} color="#1A1A1A" />
                </motion.div>
              </div>
              
              {/* Shadow */}
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 -z-10"></div>
            </div>

            {/* Service Icons Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: "Palette", label: "Brand Identity" },
                { icon: "Globe", label: "Digital Presence" },
                { icon: "Megaphone", label: "Brand Strategy" },
                { icon: "Layout", label: "Visual Systems" },
                { icon: "Video", label: "Motion Design" },
                { icon: "Package", label: "Brand Packaging" }
              ]?.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-card border-2 border-concrete p-4 text-center hover:border-accent transition-colors duration-300 group"
                  style={{ boxShadow: '2px 2px 0px #000000' }}
                >
                  <div className="w-8 h-8 bg-concrete-light border border-concrete mx-auto mb-2 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                    <Icon name={service?.icon} size={16} className="group-hover:text-white" />
                  </div>
                  <div className="text-xs font-semibold text-primary">{service?.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;