import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSelector = ({ value, onChange, error }) => {
  const timelineOptions = [
    {
      id: 'asap',
      title: 'ASAP',
      description: 'Need to start immediately',
      duration: '2-4 weeks',
      icon: 'Zap',
      urgent: true
    },
    {
      id: '1-month',
      title: '1 Month',
      description: 'Ready to begin within 30 days',
      duration: '4-8 weeks',
      icon: 'Calendar',
      urgent: false
    },
    {
      id: '2-3-months',
      title: '2-3 Months',
      description: 'Planning phase, flexible start',
      duration: '8-12 weeks',
      icon: 'Clock',
      urgent: false
    },
    {
      id: '3-6-months',
      title: '3-6 Months',
      description: 'Strategic planning and preparation',
      duration: '12-16 weeks',
      icon: 'Target',
      urgent: false
    },
    {
      id: 'exploring',
      title: 'Just Exploring',
      description: 'Gathering information and quotes',
      duration: 'TBD',
      icon: 'Search',
      urgent: false
    }
  ];

  const handleSelection = (timelineId) => {
    onChange(timelineId);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-primary">
          What's your ideal timeline?
        </label>
        <p className="text-sm text-muted-foreground">
          This helps us understand your urgency and plan our approach accordingly.
        </p>
      </div>
      <div className="space-y-3">
        {timelineOptions?.map((option) => {
          const isSelected = value === option?.id;
          
          return (
            <button
              key={option?.id}
              type="button"
              onClick={() => handleSelection(option?.id)}
              className={`w-full p-4 text-left border-2 transition-all duration-300 group ${
                isSelected
                  ? 'border-accent bg-accent/10 text-primary' :'border-concrete bg-card hover:border-accent/50 text-card-foreground hover:bg-concrete-light/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Radio Button */}
                  <div className={`w-5 h-5 border-2 rounded-full transition-all duration-300 ${
                    isSelected 
                      ? 'border-accent bg-accent' :'border-concrete bg-transparent group-hover:border-accent/50'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 bg-accent-foreground rounded-full absolute top-1.5 left-1.5"></div>
                    )}
                  </div>

                  {/* Icon */}
                  <Icon 
                    name={option?.icon} 
                    size={20} 
                    className={`${isSelected ? 'text-accent' : 'text-muted-foreground'} ${
                      option?.urgent ? 'animate-pulse' : ''
                    }`} 
                  />

                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-base">
                        {option?.title}
                      </h3>
                      {option?.urgent && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-error text-error-foreground">
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-sm opacity-80 mt-1">
                      {option?.description}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">
                    {option?.duration}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Typical duration
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {/* Timeline Info */}
      {value && (
        <div className="p-4 bg-concrete-light border-2 border-concrete">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-accent" />
            <span className="text-sm font-semibold text-primary">
              Timeline Expectations
            </span>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            {value === 'asap' && (
              <>
                <p>• Rush projects may require additional resources</p>
                <p>• Limited revision cycles to meet deadlines</p>
                <p>• Premium pricing may apply for expedited delivery</p>
              </>
            )}
            {value === '1-month' && (
              <>
                <p>• Standard project timeline with full process</p>
                <p>• Adequate time for research and iterations</p>
                <p>• Balanced approach to quality and speed</p>
              </>
            )}
            {(value === '2-3-months' || value === '3-6-months') && (
              <>
                <p>• Extended timeline allows for thorough strategy</p>
                <p>• Multiple rounds of refinement and testing</p>
                <p>• Comprehensive market research and validation</p>
              </>
            )}
            {value === 'exploring' && (
              <>
                <p>• No immediate pressure or commitment</p>
                <p>• Focus on education and relationship building</p>
                <p>• Flexible approach to project development</p>
              </>
            )}
          </div>
        </div>
      )}
      {error && (
        <div className="flex items-center space-x-2 text-error text-sm">
          <Icon name="AlertCircle" size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default TimelineSelector;