import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSpecs = ({ specifications, challenges }) => {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'performance', label: 'Performance', icon: 'Zap' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'scalability', label: 'Scalability', icon: 'TrendingUp' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Deep dive into the technical implementation and challenges overcome
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-bold border-2 transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground border-accent brutalist-shadow'
                    : 'bg-card text-card-foreground border-concrete hover:bg-concrete-light'
                }`}
              >
                <Icon name={tab?.icon} size={20} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {tabs?.find(tab => tab?.id === activeTab)?.label} Details
              </h3>
              
              {specifications?.[activeTab]?.map((spec, index) => (
                <div key={index} className="p-6 bg-card border-2 border-concrete">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary mb-2">{spec?.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {spec?.description}
                      </p>
                      {spec?.technologies && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {spec?.technologies?.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-concrete-light text-xs font-medium text-primary border border-concrete"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Challenges */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Technical Challenges
              </h3>
              
              {challenges?.map((challenge, index) => (
                <div key={index} className="space-y-4">
                  {/* Challenge */}
                  <div className="p-6 bg-card border-2 border-concrete">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-warning border-2 border-warning flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="AlertTriangle" size={16} color="white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">
                          {challenge?.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-6 bg-success/10 border-2 border-success">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-success border-2 border-success flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="CheckCircle" size={16} color="white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          {challenge?.solution}
                        </p>
                        {challenge?.impact && (
                          <div className="text-xs text-success font-semibold">
                            Impact: {challenge?.impact}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Performance Metrics */}
              <div className="p-6 bg-accent/10 border-2 border-accent">
                <h4 className="font-bold text-primary mb-4 flex items-center space-x-2">
                  <Icon name="BarChart3" size={20} />
                  <span>Performance Metrics</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent">98%</div>
                    <div className="text-xs text-muted-foreground">Lighthouse Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent">1.2s</div>
                    <div className="text-xs text-muted-foreground">Load Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent">A+</div>
                    <div className="text-xs text-muted-foreground">Security Grade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;