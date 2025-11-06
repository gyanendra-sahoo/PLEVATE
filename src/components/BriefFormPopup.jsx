import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';
import Input from './ui/Input';
import { X } from 'lucide-react';

const BriefFormPopup = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  // Close popup when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const overlayVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = shouldReduceMotion ? {} : {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] bg-background brutalist-border brutalist-shadow overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-concrete bg-background">
              <h2 className="text-3xl font-black text-primary">START YOUR BRIEF</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="w-10 h-10 p-0 border-2 border-concrete hover:border-accent hover:bg-accent hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Form Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-primary mb-2">
                      NAME *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData?.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full brutalist-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-primary mb-2">
                      EMAIL *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData?.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full brutalist-border"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    COMPANY
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full brutalist-border"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-primary mb-2">
                      PROJECT TYPE *
                    </label>
                    <select
                      name="projectType"
                      value={formData?.projectType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select project type</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="digital-experience">Digital Experience</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="motion-design">Motion Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-black text-primary mb-2">
                      BUDGET RANGE
                    </label>
                    <select
                      name="budget"
                      value={formData?.budget}
                      onChange={handleChange}
                      className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5K - $15K</option>
                      <option value="15k-30k">$15K - $30K</option>
                      <option value="30k-50k">$30K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    TIMELINE
                  </label>
                  <select
                    name="timeline"
                    value={formData?.timeline}
                    onChange={handleChange}
                    className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-months">1-2 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6+-months">6+ Months</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    PROJECT DESCRIPTION *
                  </label>
                  <textarea
                    name="description"
                    value={formData?.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, challenges, and what you're looking to achieve..."
                    required
                    rows={4}
                    className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent text-white font-black py-4 brutalist-border brutalist-shadow uppercase tracking-wider transition-all duration-300"
                  >
                    SUBMIT BRIEF
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BriefFormPopup;