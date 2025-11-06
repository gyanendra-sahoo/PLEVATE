import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RelatedCaseStudies = ({ relatedStudies }) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              More Case Studies
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore other transformations we've crafted
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedStudies?.map((study, index) => (
              <Link
                key={index}
                to={`/case-study/${study?.slug}`}
                className="group block bg-card border-2 border-concrete hover:border-accent transition-all duration-300 brutalist-shadow hover:shadow-none"
              >
                {/* Image */}
                <div className="aspect-video bg-concrete-light overflow-hidden">
                  <Image
                    src={study?.thumbnail}
                    alt={study?.thumbnailAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-bold border border-accent">
                      {study?.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {study?.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {study?.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {study?.description}
                  </p>

                  {/* Key Metric */}
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-lg font-black text-accent">{study?.keyMetric?.value}</div>
                      <div className="text-xs text-muted-foreground">{study?.keyMetric?.label}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-accent group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-sm font-semibold">View Case</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link
              to="/case-study"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground font-bold border-2 border-primary hover:bg-primary/90 transition-colors duration-300 brutalist-shadow"
            >
              <span>View All Case Studies</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;