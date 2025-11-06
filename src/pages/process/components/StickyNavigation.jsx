import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StickyNavigation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 0, title: "Discovery", subtitle: "Strategy", icon: "Search" },
    { id: 1, title: "Concept", subtitle: "Design", icon: "Palette" },
    { id: 2, title: "Build", subtitle: "Refine", icon: "Wrench" },
    { id: 3, title: "Launch", subtitle: "Optimize", icon: "Rocket" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection ? heroSection?.offsetHeight : 0;
      const scrollPosition = window.scrollY;
      
      // Show navigation after hero section
      setIsVisible(scrollPosition > heroHeight - 100);

      // Update active step based on scroll position
      const sections = navItems?.map((_, index) => 
        document.getElementById(`step-${index}`)
      );
      
      const currentScrollPos = scrollPosition + window.innerHeight / 2;
      
      sections?.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (currentScrollPos >= offsetTop && currentScrollPos < offsetTop + offsetHeight) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (stepIndex) => {
    const element = document.getElementById(`step-${stepIndex}`);
    if (element) {
      const offsetTop = element?.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b-2 border-concrete"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Route" size={20} className="text-accent" />
            <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
              Process Navigation
            </span>
          </div>

          <nav className="flex items-center space-x-1">
            {navItems?.map((item, index) => (
              <button
                key={item?.id}
                onClick={() => scrollToStep(index)}
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 group ${
                  activeStep === index
                    ? 'text-primary' :'text-muted-foreground hover:text-primary'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      activeStep === index ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  />
                  <div className="text-left hidden sm:block">
                    <div className="font-bold">{item?.title}</div>
                    <div className="text-xs opacity-75">{item?.subtitle}</div>
                  </div>
                </div>

                {/* Active indicator */}
                {activeStep === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-accent/10 border-2 border-accent transform -skew-x-12"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-concrete-light transform -skew-x-12 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Progress indicator */}
          <div className="hidden lg:flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {activeStep + 1} of {navItems?.length}
            </span>
            <div className="w-24 h-2 bg-concrete-light border border-concrete">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep + 1) / navItems?.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyNavigation;