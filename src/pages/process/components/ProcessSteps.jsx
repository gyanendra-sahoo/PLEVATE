import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      subtitle: "Foundation Phase",
      duration: "2-3 Weeks",
      involvement: "High - Daily collaboration required",
      description: `We dive deep into your brand's DNA, market position, and competitive landscape. This isn't surface-level research—we're excavating the core truths that will drive every creative decision.\n\nThrough intensive workshops and strategic analysis, we uncover what makes your brand genuinely different and how to amplify that difference into market dominance.`,
      deliverables: [
        "Brand audit and competitive analysis",
        "Stakeholder interview synthesis",
        "Market positioning framework",
        "Strategic brand platform",
        "Creative brief and project roadmap"
      ],
      transitionCriteria: [
        "Strategic platform approved by all stakeholders",
        "Creative brief signed off",
        "Project timeline confirmed"
      ],
      icon: "Search",
      color: "bg-accent"
    },
    {
      id: 2,
      title: "Concept & Design",
      subtitle: "Creation Phase",
      duration: "3-4 Weeks",
      involvement: "Medium - Weekly reviews and feedback",
      description: `Armed with strategic clarity, we architect your brand's visual and verbal identity. Every element is purposeful, every choice defensible.\n\nWe don't chase trends—we create timeless brand systems that work across every touchpoint, from business cards to billboards.`,
      deliverables: [
        "Logo and visual identity system",
        "Brand guidelines and standards",
        "Typography and color palette",
        "Voice and tone framework",
        "Initial application concepts"
      ],
      transitionCriteria: [
        "Core identity elements approved",
        "Brand guidelines finalized",
        "Application strategy confirmed"
      ],
      icon: "Palette",
      color: "bg-primary"
    },
    {
      id: 3,
      title: "Build & Refine",
      subtitle: "Development Phase",
      duration: "2-4 Weeks",
      involvement: "Medium - Bi-weekly check-ins",
      description: `Your brand comes to life across every touchpoint. We build comprehensive brand systems that maintain consistency while allowing for creative flexibility.\n\nEvery application is tested, refined, and optimized to ensure your brand performs flawlessly in the real world.`,
      deliverables: [
        "Complete brand asset library",
        "Marketing collateral templates",
        "Digital brand applications",
        "Brand implementation toolkit",
        "Quality assurance documentation"
      ],
      transitionCriteria: [
        "All brand assets delivered and approved",
        "Implementation toolkit tested",
        "Team training materials prepared"
      ],
      icon: "Wrench",
      color: "bg-secondary"
    },
    {
      id: 4,
      title: "Launch & Optimize",
      subtitle: "Activation Phase",
      duration: "1-2 Weeks",
      involvement: "Low - Final approvals and monitoring",
      description: `We don't just hand over files and disappear. The launch phase ensures your team is equipped to maintain brand excellence and your brand makes its market debut with maximum impact.\n\nOngoing optimization ensures your brand continues to evolve and improve based on real-world performance data.`,
      deliverables: [
        "Brand launch strategy and timeline",
        "Team training and documentation",
        "Performance monitoring setup",
        "30-day optimization report",
        "Long-term brand evolution roadmap"
      ],
      transitionCriteria: [
        "Successful brand launch executed",
        "Team fully trained on brand standards",
        "Performance metrics established"
      ],
      icon: "Rocket",
      color: "bg-success"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = processSteps?.map((_, index) => 
        document.getElementById(`step-${index}`)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections?.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {processSteps?.map((step, index) => (
          <div
            key={step?.id}
            id={`step-${index}`}
            className="mb-32 last:mb-0"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${step?.color} border-2 border-primary flex items-center justify-center`}>
                      <Icon name={step?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        Step {step?.id}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black text-primary">
                        {step?.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-accent mb-2">
                    {step?.subtitle}
                  </p>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  {step?.description?.split('\n\n')?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Step Details Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border-2 border-concrete p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Clock" size={16} className="text-accent" />
                      <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                        Duration
                      </span>
                    </div>
                    <p className="font-semibold text-primary">{step?.duration}</p>
                  </div>
                  
                  <div className="bg-card border-2 border-concrete p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Users" size={16} className="text-accent" />
                      <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                        Client Involvement
                      </span>
                    </div>
                    <p className="font-semibold text-primary">{step?.involvement}</p>
                  </div>
                </div>
              </motion.div>

              {/* Deliverables & Criteria */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="bg-card border-2 border-concrete p-8 mb-6">
                  <h4 className="text-xl font-black text-primary mb-6 flex items-center">
                    <Icon name="Package" size={20} className="mr-2" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {step?.deliverables?.map((deliverable, dIndex) => (
                      <li key={dIndex} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/10 border-2 border-accent p-8">
                  <h4 className="text-xl font-black text-primary mb-6 flex items-center">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Next Phase Criteria
                  </h4>
                  <ul className="space-y-3">
                    {step?.transitionCriteria?.map((criteria, cIndex) => (
                      <li key={cIndex} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;