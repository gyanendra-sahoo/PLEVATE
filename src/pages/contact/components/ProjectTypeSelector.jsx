import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTypeSelector = ({ value, onChange, error }) => {
  const projectTypes = [
    {
      id: 'brand-identity',
      title: 'Brand Identity',
      description: 'Logo, visual identity, brand guidelines',
      icon: 'Palette',
      popular: true
    },
    {
      id: 'brand-strategy',
      title: 'Brand Strategy',
      description: 'Positioning, messaging, brand architecture',
      icon: 'Target',
      popular: false
    },
    {
      id: 'digital-experience',
      title: 'Digital Experience',
      description: 'Website, app design, digital platforms',
      icon: 'Monitor',
      popular: true
    },
    {
      id: 'brand-refresh',
      title: 'Brand Refresh',
      description: 'Modernize existing brand elements',
      icon: 'RefreshCw',
      popular: false
    },
    {
      id: 'packaging-design',
      title: 'Packaging Design',
      description: 'Product packaging and retail presence',
      icon: 'Package',
      popular: false
    },
    {
      id: 'complete-rebrand',
      title: 'Complete Rebrand',
      description: 'Full transformation from strategy to execution',
      icon: 'Zap',
      popular: true
    }
  ];

  const handleSelection = (typeId) => {
    if (value?.includes(typeId)) {
      onChange(value?.filter(id => id !== typeId));
    } else {
      onChange([...value, typeId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-primary">
          What type of project are you considering?
        </label>
        <p className="text-sm text-muted-foreground">
          Select all that apply. We'll tailor our approach to your specific needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes?.map((type) => {
          const isSelected = value?.includes(type?.id);
          
          return (
            <button
              key={type?.id}
              type="button"
              onClick={() => handleSelection(type?.id)}
              className={`relative p-6 text-left border-2 transition-all duration-300 group ${
                isSelected
                  ? 'border-accent bg-accent/10 text-primary' :'border-concrete bg-card hover:border-accent/50 text-card-foreground hover:bg-concrete-light/50'
              }`}
            >
              {/* Popular Badge */}
              {type?.popular && (
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-bold bg-accent text-accent-foreground">
                    POPULAR
                  </span>
                </div>
              )}
              {/* Selection Indicator */}
              <div className={`absolute top-4 left-4 w-6 h-6 border-2 transition-all duration-300 ${
                isSelected 
                  ? 'border-accent bg-accent' :'border-concrete bg-transparent group-hover:border-accent/50'
              }`}>
                {isSelected && (
                  <Icon 
                    name="Check" 
                    size={16} 
                    className="text-accent-foreground absolute top-0.5 left-0.5" 
                  />
                )}
              </div>
              {/* Content */}
              <div className="ml-10">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon 
                    name={type?.icon} 
                    size={20} 
                    className={isSelected ? 'text-accent' : 'text-muted-foreground'} 
                  />
                  <h3 className="font-semibold text-base">
                    {type?.title}
                  </h3>
                </div>
                <p className="text-sm opacity-80">
                  {type?.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      {/* Selected Summary */}
      {value?.length > 0 && (
        <div className="p-4 bg-concrete-light border-2 border-concrete">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-accent" />
            <span className="text-sm font-semibold text-primary">
              Selected Services ({value?.length})
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {value?.map((typeId) => {
              const type = projectTypes?.find(t => t?.id === typeId);
              return (
                <span 
                  key={typeId}
                  className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground"
                >
                  {type?.title}
                </span>
              );
            })}
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

export default ProjectTypeSelector;