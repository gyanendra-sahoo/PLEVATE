import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ResultsShowcase = ({ beforeAfter, businessMetrics, testimonial }) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              Transformation Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable impact that goes beyond aesthetics
            </p>
          </div>

          {/* Before & After */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Visual Transformation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon name="ArrowLeft" size={20} className="text-muted-foreground" />
                  <span className="font-bold text-muted-foreground uppercase tracking-wide">
                    Before
                  </span>
                </div>
                <div className="aspect-video bg-concrete-light border-2 border-concrete overflow-hidden">
                  <Image
                    src={beforeAfter?.before?.image}
                    alt={beforeAfter?.before?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-background border-2 border-concrete">
                  <p className="text-muted-foreground text-sm">
                    {beforeAfter?.before?.description}
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="font-bold text-accent uppercase tracking-wide">
                    After
                  </span>
                  <Icon name="ArrowRight" size={20} className="text-accent" />
                </div>
                <div className="aspect-video bg-concrete-light border-2 border-accent overflow-hidden brutalist-shadow">
                  <Image
                    src={beforeAfter?.after?.image}
                    alt={beforeAfter?.after?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-accent/10 border-2 border-accent">
                  <p className="text-primary text-sm font-medium">
                    {beforeAfter?.after?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Metrics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Business Impact
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessMetrics?.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-background border-2 border-concrete brutalist-shadow">
                  <div className="w-12 h-12 bg-accent border-2 border-accent mx-auto mb-4 flex items-center justify-center">
                    <Icon name={metric?.icon} size={24} color="white" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">
                    {metric?.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {metric?.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric?.timeframe}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-primary text-primary-foreground p-8 lg:p-12 border-4 border-primary brutalist-shadow">
            <div className="max-w-4xl mx-auto text-center">
              <Icon name="Quote" size={48} className="mx-auto mb-6 opacity-50" />
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                "{testimonial?.quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonial?.author?.avatar}
                  alt={testimonial?.author?.avatarAlt}
                  className="w-16 h-16 rounded-full border-2 border-primary-foreground"
                />
                <div className="text-left">
                  <div className="font-bold text-lg">{testimonial?.author?.name}</div>
                  <div className="text-sm opacity-80">{testimonial?.author?.title}</div>
                  <div className="text-sm opacity-60">{testimonial?.author?.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;