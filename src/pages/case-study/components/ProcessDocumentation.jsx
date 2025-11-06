import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProcessDocumentation = ({ processSteps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent documentation of our creative process, challenges faced, and solutions discovered.
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps?.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-6 py-3 font-bold border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-accent text-accent-foreground border-accent brutalist-shadow'
                    : 'bg-card text-card-foreground border-concrete hover:bg-concrete-light'
                }`}
              >
                {step?.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {processSteps?.[activeStep]?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {processSteps?.[activeStep]?.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div className="p-6 bg-card border-2 border-concrete">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="AlertTriangle" size={20} className="text-warning" />
                    <h4 className="font-bold text-primary">Challenge</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {processSteps?.[activeStep]?.challenge}
                  </p>
                </div>

                <div className="p-6 bg-card border-2 border-concrete">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <h4 className="font-bold text-primary">Solution</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {processSteps?.[activeStep]?.solution}
                  </p>
                </div>
              </div>

              {/* Tools & Methods */}
              <div>
                <h4 className="font-bold text-primary mb-4">Tools & Methods Used</h4>
                <div className="flex flex-wrap gap-2">
                  {processSteps?.[activeStep]?.tools?.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-concrete-light text-sm font-medium text-primary border border-concrete"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Insights */}
              <div className="p-6 bg-accent/10 border-2 border-accent">
                <h4 className="font-bold text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={20} />
                  <span>Key Insight</span>
                </h4>
                <p className="text-muted-foreground italic">
                  "{processSteps?.[activeStep]?.insight}"
                </p>
              </div>
            </div>

            {/* Visual Documentation */}
            <div className="space-y-6">
              {processSteps?.[activeStep]?.images?.map((image, index) => (
                <div key={index} className="relative">
                  <div className="aspect-video bg-concrete-light border-2 border-concrete overflow-hidden">
                    <Image
                      src={image?.src}
                      alt={image?.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold border-2 border-primary">
                    {image?.caption}
                  </div>
                </div>
              ))}

              {/* Metrics for this step */}
              {processSteps?.[activeStep]?.metrics && (
                <div className="grid grid-cols-2 gap-4">
                  {processSteps?.[activeStep]?.metrics?.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-card border-2 border-concrete">
                      <div className="text-2xl font-black text-accent">{metric?.value}</div>
                      <div className="text-sm font-semibold text-muted-foreground">
                        {metric?.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessDocumentation;