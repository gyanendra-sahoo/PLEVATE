import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const BudgetSlider = ({ value, onChange, error }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const budgetRanges = [
    { min: 5000, max: 15000, label: '$5K - $15K', description: 'Brand refresh & basic identity' },
    { min: 15000, max: 35000, label: '$15K - $35K', description: 'Complete brand system & guidelines' },
    { min: 35000, max: 75000, label: '$35K - $75K', description: 'Full rebrand with digital ecosystem' },
    { min: 75000, max: 150000, label: '$75K - $150K', description: 'Enterprise transformation & rollout' },
    { min: 150000, max: 300000, label: '$150K+', description: 'Multi-brand portfolio & strategy' }
  ];

  const handleSliderChange = (e) => {
    const newValue = parseInt(e?.target?.value);
    onChange(newValue);
  };

  const getCurrentRange = () => {
    return budgetRanges?.find(range => 
      value >= range?.min && (range?.max ? value <= range?.max : true)
    ) || budgetRanges?.[0];
  };

  const currentRange = getCurrentRange();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-primary">
          Project Investment Range
        </label>
        <p className="text-sm text-muted-foreground">
          Help us understand your project scope and provide accurate recommendations
        </p>
      </div>
      <div className="relative">
        {/* Budget Display */}
        <div className="mb-8 p-6 bg-concrete-light border-2 border-concrete">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-black text-primary">
              {currentRange?.label}
            </span>
            <Icon 
              name="DollarSign" 
              size={24} 
              className="text-accent" 
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {currentRange?.description}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <input
            type="range"
            min="5000"
            max="300000"
            step="5000"
            value={value}
            onChange={handleSliderChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className={`w-full h-3 bg-concrete-light appearance-none cursor-pointer slider-thumb ${
              isDragging ? 'dragging' : ''
            }`}
            style={{
              background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${
                ((value - 5000) / (300000 - 5000)) * 100
              }%, #F5F5F5 ${((value - 5000) / (300000 - 5000)) * 100}%, #F5F5F5 100%)`
            }}
          />
          
          {/* Range Markers */}
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>$5K</span>
            <span>$50K</span>
            <span>$100K</span>
            <span>$200K</span>
            <span>$300K+</span>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {budgetRanges?.map((range, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onChange(range?.min)}
              className={`p-4 text-left border-2 transition-all duration-300 ${
                currentRange?.min === range?.min
                  ? 'border-accent bg-accent/10 text-primary' :'border-concrete bg-card hover:border-accent/50 text-card-foreground'
              }`}
            >
              <div className="font-semibold text-sm mb-1">
                {range?.label}
              </div>
              <div className="text-xs opacity-80">
                {range?.description}
              </div>
            </button>
          ))}
        </div>
      </div>
      {error && (
        <div className="flex items-center space-x-2 text-error text-sm">
          <Icon name="AlertCircle" size={16} />
          <span>{error}</span>
        </div>
      )}
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #FF6B35;
          border: 3px solid #000000;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2);
        }
        
        .slider-thumb.dragging::-webkit-slider-thumb {
          transform: scale(1.2);
          box-shadow: 0 0 0 6px rgba(255, 107, 53, 0.3);
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #FF6B35;
          border: 3px solid #000000;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2);
        }
      `}</style>
    </div>
  );
};

export default BudgetSlider;