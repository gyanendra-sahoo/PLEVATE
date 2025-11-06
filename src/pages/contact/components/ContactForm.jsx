import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ formData, onChange, onSubmit, error, isSubmitting }) => {
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData?.firstName?.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData?.lastName?.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData?.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.company?.trim()) {
      errors.company = 'Company name is required';
    }
    
    if (!formData?.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors)?.length === 0) {
      onSubmit(formData);
    }
  };

  const inputFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'John',
      required: true,
      icon: 'User'
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Smith',
      required: true,
      icon: 'User'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@company.com',
      required: true,
      icon: 'Mail',
      fullWidth: true
    },
    {
      name: 'company',
      label: 'Company Name',
      type: 'text',
      placeholder: 'Your Company Inc.',
      required: true,
      icon: 'Building',
      fullWidth: true
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+1 (555) 123-4567',
      required: true,
      icon: 'Phone'
    },
    {
      name: 'website',
      label: 'Website (Optional)',
      type: 'url',
      placeholder: 'https://yourcompany.com',
      required: false,
      icon: 'Globe'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-primary">
          Let's get to know you
        </h3>
        <p className="text-sm text-muted-foreground">
          We'll use this information to personalize our conversation and provide better recommendations.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputFields?.map((field) => (
            <div 
              key={field?.name}
              className={field?.fullWidth ? 'md:col-span-2' : ''}
            >
              <div className="relative">
                <Input
                  label={field?.label}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  value={formData?.[field?.name] || ''}
                  onChange={(e) => handleInputChange(field?.name, e?.target?.value)}
                  onFocus={() => setFocusedField(field?.name)}
                  onBlur={() => setFocusedField(null)}
                  required={field?.required}
                  className="pl-10"
                />
                <Icon 
                  name={field?.icon} 
                  size={16} 
                  className={`absolute left-3 top-9 transition-colors duration-300 ${
                    focusedField === field?.name ? 'text-accent' : 'text-muted-foreground'
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Tell us more about your project (Optional)
          </label>
          <div className="relative">
            <textarea
              value={formData?.message || ''}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              placeholder="Share any specific goals, challenges, or questions you have about your project..."
              rows={4}
              className="w-full px-4 py-3 pl-10 border-2 border-concrete bg-input text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
            />
            <Icon 
              name="MessageSquare" 
              size={16} 
              className={`absolute left-3 top-3 transition-colors duration-300 ${
                focusedField === 'message' ? 'text-accent' : 'text-muted-foreground'
              }`} 
            />
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="p-4 bg-concrete-light border-2 border-concrete">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-primary mb-1">Your privacy matters</p>
              <p>
                We'll only use your information to respond to your inquiry and provide relevant project updates. 
                No spam, no sharing with third parties.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-error/10 border-2 border-error text-error">
            <div className="flex items-center space-x-2">
              <Icon name="AlertCircle" size={16} />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow hover:shadow-none transition-all duration-300"
        >
          {isSubmitting ? 'Sending Brief...' : 'Send Brief'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;