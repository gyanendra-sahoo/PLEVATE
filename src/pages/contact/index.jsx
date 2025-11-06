import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import BudgetSlider from './components/BudgetSlider';
import ProjectTypeSelector from './components/ProjectTypeSelector';
import TimelineSelector from './components/TimelineSelector';
import ContactForm from './components/ContactForm';
import ProgressIndicator from './components/ProgressIndicator';
import SuccessMessage from './components/SuccessMessage';

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Project details
    projectTypes: [],
    budget: 25000,
    timeline: '',
    
    // Contact information
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const steps = [
    {
      id: 1,
      title: 'Project Type',
      description: 'Tell us what kind of project you have in mind',
      estimatedTime: '1 minute',
      component: 'ProjectTypeSelector'
    },
    {
      id: 2,
      title: 'Budget & Timeline',
      description: 'Help us understand your investment range and timeline',
      estimatedTime: '2 minutes',
      component: 'BudgetTimeline'
    },
    {
      id: 3,
      title: 'Contact Details',
      description: 'Share your information so we can get in touch',
      estimatedTime: '3 minutes',
      component: 'ContactForm'
    }
  ];

  // Save form progress to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('brandforge-contact-form');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('brandforge-contact-form', JSON.stringify(formData));
  }, [formData]);

  const validateStep = (step) => {
    const stepErrors = {};
    
    switch (step) {
      case 1:
        if (formData?.projectTypes?.length === 0) {
          stepErrors.projectTypes = 'Please select at least one project type';
        }
        break;
      case 2:
        if (!formData?.timeline) {
          stepErrors.timeline = 'Please select your preferred timeline';
        }
        break;
      case 3:
        if (!formData?.firstName?.trim()) stepErrors.firstName = 'First name is required';
        if (!formData?.lastName?.trim()) stepErrors.lastName = 'Last name is required';
        if (!formData?.email?.trim()) {
          stepErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
          stepErrors.email = 'Please enter a valid email address';
        }
        if (!formData?.company?.trim()) stepErrors.company = 'Company name is required';
        if (!formData?.phone?.trim()) stepErrors.phone = 'Phone number is required';
        break;
      default:
        break;
    }
    
    return stepErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    setErrors(stepErrors);
    
    if (Object.keys(stepErrors)?.length === 0) {
      if (currentStep < steps?.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleFormSubmit = async (contactData) => {
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear saved form data
      localStorage.removeItem('brandforge-contact-form');
      
      setIsSubmitted(true);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Brief Received - Plevate</title>
          <meta name="description" content="Thank you for your project brief. We'll be in touch within 24 hours to discuss your brand transformation." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-20 pb-16 px-6 lg:px-8">
            <SuccessMessage formData={formData} />
          </main>
        </div>
      </>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProjectTypeSelector
            value={formData?.projectTypes}
            onChange={(types) => updateFormData({ projectTypes: types })}
            error={errors?.projectTypes}
          />
        );
      case 2:
        return (
          <div className="space-y-8">
            <BudgetSlider
              value={formData?.budget}
              onChange={(budget) => updateFormData({ budget })}
              error={errors?.budget}
            />
            <TimelineSelector
              value={formData?.timeline}
              onChange={(timeline) => updateFormData({ timeline })}
              error={errors?.timeline}
            />
          </div>
        );
      case 3:
        return (
          <ContactForm
            formData={formData}
            onChange={updateFormData}
            onSubmit={handleFormSubmit}
            error={errors?.submit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Start a Brief - Brand Forge</title>
        <meta name="description" content="Ready to make your brand impossible to ignore? Start your project brief with transparent budget planning and timeline discussion." />
        <meta name="keywords" content="brand agency contact, project brief, brand consultation, design quote" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-16">
          {/* Hero Section */}
          <section className="px-6 lg:px-8 py-12 border-b-2 border-concrete">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                  Start Your
                  <span className="block text-accent">Brand Brief</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Ready to make your brand impossible to ignore? Let's discuss your project with complete transparency about investment and timeline.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span>24-hour response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span>No spam guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span>500+ brands transformed</span>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Progress Indicator */}
              <div className="mb-12">
                <ProgressIndicator
                  currentStep={currentStep}
                  totalSteps={steps?.length}
                  steps={steps}
                />
              </div>

              {/* Form Content */}
              <div className="bg-card border-2 border-concrete p-8 md:p-12 space-y-8">
                {renderStepContent()}

                {/* Navigation Buttons */}
                {currentStep < 3 && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t-2 border-concrete">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                      iconName="ArrowLeft"
                      iconPosition="left"
                      className="border-2 border-concrete hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous Step
                    </Button>
                    
                    <Button
                      variant="default"
                      onClick={handleNext}
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow hover:shadow-none transition-all duration-300"
                    >
                      {currentStep === steps?.length ? 'Review & Submit' : 'Next Step'}
                    </Button>
                  </div>
                )}
              </div>

              {/* Help Section */}
              <div className="mt-12 text-center space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  Need Help or Have Questions?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is here to help you through the process
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:hello@brandforge.agency"
                    className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Icon name="Mail" size={16} />
                    <span>hello@brandforge.agency</span>
                  </a>
                  
                  <a 
                    href="tel:+15551234567"
                    className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Icon name="Phone" size={16} />
                    <span>+1 (555) 123-4567</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-concrete bg-card px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Plevate. Making brands impossible to ignore since 2018.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;