import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-2 bg-concrete-light border border-concrete">
          <div 
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-between absolute -top-2 w-full">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <div
                key={stepNumber}
                className={`w-6 h-6 border-2 flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent border-accent text-accent-foreground'
                    : isCurrent
                    ? 'bg-background border-accent text-accent' :'bg-background border-concrete text-muted-foreground'
                }`}
              >
                {isCompleted ? (
                  <Icon name="Check" size={12} />
                ) : (
                  <span className="text-xs font-bold">{stepNumber}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Step Information */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
          <Icon name="ArrowRight" size={14} className="text-accent" />
          <span className="text-sm font-semibold text-primary">
            {steps?.[currentStep - 1]?.title}
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          {steps?.[currentStep - 1]?.description}
        </p>
      </div>
      {/* Time Estimate */}
      <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
        <Icon name="Clock" size={12} />
        <span>
          Estimated time: {steps?.[currentStep - 1]?.estimatedTime || '2-3 minutes'}
        </span>
      </div>
      {/* Navigation Hints */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          {currentStep > 1 && (
            <>
              <Icon name="ArrowLeft" size={12} />
              <span>Previous step</span>
            </>
          )}
        </div>
        <div className="flex items-center space-x-1">
          {currentStep < totalSteps && (
            <>
              <span>Next step</span>
              <Icon name="ArrowRight" size={12} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;