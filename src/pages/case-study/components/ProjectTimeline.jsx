import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ timeline }) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-12 text-center">
            Project Timeline
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-concrete"></div>

            <div className="space-y-12">
              {timeline?.map((phase, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent border-4 border-accent flex items-center justify-center brutalist-shadow">
                      <Icon name={phase?.icon} size={24} color="white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-background border-2 border-concrete p-6 brutalist-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-primary">
                          {phase?.title}
                        </h3>
                        <span className="text-sm font-semibold text-muted-foreground bg-concrete-light px-3 py-1 border border-concrete">
                          {phase?.duration}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {phase?.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                          Key Deliverables
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase?.deliverables?.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-concrete-light text-xs font-medium text-primary border border-concrete"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Team Members */}
                      {phase?.teamMembers && (
                        <div className="mt-4 pt-4 border-t border-concrete-light">
                          <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">
                            Team
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase?.teamMembers?.map((member, idx) => (
                              <span
                                key={idx}
                                className="text-xs text-muted-foreground"
                              >
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;