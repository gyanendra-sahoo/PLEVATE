import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamCredits = ({ teamMembers, projectLead }) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              The Team Behind the Magic
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the talented individuals who brought this vision to life
            </p>
          </div>

          {/* Project Lead */}
          <div className="mb-16">
            <div className="bg-accent text-accent-foreground p-8 lg:p-12 border-4 border-accent brutalist-shadow">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-accent-foreground overflow-hidden">
                    <Image
                      src={projectLead?.avatar}
                      alt={projectLead?.avatarAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent-foreground text-accent px-2 py-1 text-xs font-bold">
                    LEAD
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-black mb-2">{projectLead?.name}</h3>
                  <div className="text-lg font-semibold mb-4 opacity-90">{projectLead?.role}</div>
                  <p className="text-accent-foreground/80 leading-relaxed mb-4">
                    {projectLead?.bio}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {projectLead?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-foreground text-accent text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers?.map((member, index) => (
              <div key={index} className="bg-background border-2 border-concrete p-6 brutalist-shadow hover:shadow-none transition-shadow duration-300">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 border-2 border-concrete overflow-hidden mx-auto">
                      <Image
                        src={member?.avatar}
                        alt={member?.avatarAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-1">
                      <Icon name={member?.roleIcon} size={16} />
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-primary mb-1">{member?.name}</h4>
                  <div className="text-sm font-semibold text-accent mb-3">{member?.role}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {member?.contribution}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-1">
                    {member?.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-concrete-light text-xs font-medium text-primary border border-concrete"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  {member?.contact && (
                    <div className="mt-4 pt-4 border-t border-concrete-light">
                      <div className="flex justify-center space-x-3">
                        {member?.contact?.linkedin && (
                          <a
                            href={member?.contact?.linkedin}
                            className="text-muted-foreground hover:text-accent transition-colors duration-300"
                            aria-label={`${member?.name} LinkedIn profile`}
                          >
                            <Icon name="Linkedin" size={16} />
                          </a>
                        )}
                        {member?.contact?.portfolio && (
                          <a
                            href={member?.contact?.portfolio}
                            className="text-muted-foreground hover:text-accent transition-colors duration-300"
                            aria-label={`${member?.name} portfolio`}
                          >
                            <Icon name="ExternalLink" size={16} />
                          </a>
                        )}
                        {member?.contact?.email && (
                          <a
                            href={`mailto:${member?.contact?.email}`}
                            className="text-muted-foreground hover:text-accent transition-colors duration-300"
                            aria-label={`Email ${member?.name}`}
                          >
                            <Icon name="Mail" size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Note */}
          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-concrete-light border-2 border-concrete">
              <Icon name="Users" size={32} className="mx-auto mb-4 text-accent" />
              <h4 className="font-bold text-primary mb-2">Interested in Collaboration?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is always open to working with talented creatives and agencies.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground font-semibold border-2 border-accent hover:bg-accent/90 transition-colors duration-300"
              >
                <span>Get in Touch</span>
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCredits;