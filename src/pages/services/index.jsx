import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ServiceStats from './components/ServiceStats';
import ProcessPreview from './components/ProcessPreview';
import IndustryFocus from './components/IndustryFocus';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const services = [
    {
      id: 1,
      icon: "Palette",
      title: "Brand Identity & Visual Systems",
      description: "Complete brand architecture from logo to comprehensive visual systems that demand attention across every touchpoint.",
      priceRange: "$15K - $50K",
      timeline: "4-8 weeks",
      industries: ["Tech", "Healthcare", "Finance", "Retail"],
      features: [
        {
          name: "Logo & Brand Mark Design",
          description: "Distinctive visual identity that cuts through market noise"
        },
        {
          name: "Visual Identity System",
          description: "Comprehensive guidelines for consistent brand application"
        },
        {
          name: "Typography & Color Architecture",
          description: "Strategic font and color systems that reinforce brand personality"
        },
        {
          name: "Brand Asset Library",
          description: "Complete collection of brand elements for immediate use"
        },
        {
          name: "Application Examples",
          description: "Real-world applications across digital and print touchpoints"
        }
      ],
      process: [
        {
          phase: "Brand Discovery",
          duration: "1 week",
          description: "Deep dive into brand positioning, competitive landscape, and target audience insights"
        },
        {
          phase: "Concept Development",
          duration: "2 weeks",
          description: "Multiple creative directions exploring different brand expressions and visual approaches"
        },
        {
          phase: "Refinement & System Building",
          duration: "2 weeks",
          description: "Selected concept development into comprehensive visual system with guidelines"
        },
        {
          phase: "Delivery & Implementation",
          duration: "1 week",
          description: "Final asset delivery with implementation support and team training"
        }
      ]
    },
    {
      id: 2,
      icon: "Globe",
      title: "Digital Brand Experience",
      description: "Websites, apps, and digital platforms that translate your brand into impossible-to-ignore online experiences.",
      priceRange: "$25K - $75K",
      timeline: "6-12 weeks",
      industries: ["SaaS", "E-commerce", "Professional Services", "Education"],
      features: [
        {
          name: "Website Design & Development",
          description: "Custom websites that convert visitors into customers"
        },
        {
          name: "User Experience Architecture",
          description: "Intuitive navigation and interaction design for optimal user journeys"
        },
        {
          name: "Mobile-First Responsive Design",
          description: "Seamless experiences across all devices and screen sizes"
        },
        {
          name: "Content Management System",
          description: "Easy-to-use CMS for ongoing content updates and management"
        },
        {
          name: "Performance Optimization",
          description: "Fast-loading, SEO-optimized sites that rank well and convert better"
        }
      ],
      process: [
        {
          phase: "Digital Strategy",
          duration: "1-2 weeks",
          description: "User research, competitive analysis, and digital experience strategy development"
        },
        {
          phase: "UX/UI Design",
          duration: "3-4 weeks",
          description: "Wireframing, prototyping, and visual design of all digital touchpoints"
        },
        {
          phase: "Development & Integration",
          duration: "3-4 weeks",
          description: "Custom development with CMS integration and third-party tool connections"
        },
        {
          phase: "Testing & Launch",
          duration: "1-2 weeks",
          description: "Quality assurance testing, performance optimization, and go-live support"
        }
      ]
    },
    {
      id: 3,
      icon: "Megaphone",
      title: "Brand Strategy & Positioning",
      description: "Strategic foundation that defines how your brand shows up in the world and why customers should care.",
      priceRange: "$10K - $30K",
      timeline: "3-6 weeks",
      industries: ["Startups", "Scale-ups", "Established Brands", "Non-profits"],
      features: [
        {
          name: "Brand Positioning Framework",
          description: "Clear positioning that differentiates you from competitors"
        },
        {
          name: "Target Audience Definition",
          description: "Detailed customer personas and behavioral insights"
        },
        {
          name: "Brand Voice & Messaging",
          description: "Consistent communication style and key messaging architecture"
        },
        {
          name: "Competitive Analysis",
          description: "Market landscape analysis and opportunity identification"
        },
        {
          name: "Brand Architecture",
          description: "Strategic framework for brand extensions and sub-brands"
        }
      ],
      process: [
        {
          phase: "Research & Analysis",
          duration: "1-2 weeks",
          description: "Market research, competitor analysis, and stakeholder interviews"
        },
        {
          phase: "Strategy Development",
          duration: "2-3 weeks",
          description: "Brand positioning, messaging framework, and strategic recommendations"
        },
        {
          phase: "Validation & Refinement",
          duration: "1 week",
          description: "Strategy testing with target audiences and stakeholder feedback integration"
        },
        {
          phase: "Implementation Planning",
          duration: "1 week",
          description: "Rollout strategy and implementation roadmap development"
        }
      ]
    },
    {
      id: 4,
      icon: "Package",
      title: "Brand Packaging & Product Design",
      description: "Physical brand expressions that stand out on shelves and create memorable unboxing experiences.",
      priceRange: "$20K - $60K",
      timeline: "6-10 weeks",
      industries: ["Consumer Goods", "Food & Beverage", "Beauty", "Retail"],
      features: [
        {
          name: "Package Design & Structure",
          description: "Eye-catching packaging that drives purchase decisions"
        },
        {
          name: "Product Label Design",
          description: "Information hierarchy and visual design for product labels"
        },
        {
          name: "Unboxing Experience Design",
          description: "Memorable moments that encourage social sharing and repeat purchases"
        },
        {
          name: "Retail Display Strategy",
          description: "Point-of-sale materials and retail environment optimization"
        },
        {
          name: "Production-Ready Files",
          description: "Print-ready artwork with specifications for manufacturing"
        }
      ],
      process: [
        {
          phase: "Product & Market Research",
          duration: "1-2 weeks",
          description: "Product analysis, retail environment study, and consumer behavior research"
        },
        {
          phase: "Concept Development",
          duration: "2-3 weeks",
          description: "Multiple packaging concepts with structural and visual design exploration"
        },
        {
          phase: "Prototyping & Testing",
          duration: "2-3 weeks",
          description: "Physical prototypes, consumer testing, and design refinement"
        },
        {
          phase: "Production Preparation",
          duration: "1-2 weeks",
          description: "Final artwork preparation, print specifications, and production support"
        }
      ]
    },
    {
      id: 5,
      icon: "Video",
      title: "Motion Design & Brand Animation",
      description: "Animated brand elements that bring your identity to life across digital and video content.",
      priceRange: "$8K - $25K",
      timeline: "3-6 weeks",
      industries: ["Tech", "Entertainment", "Social Media", "Advertising"],
      features: [
        {
          name: "Animated Logo & Brand Elements",
          description: "Dynamic logo animations for video content and digital applications"
        },
        {
          name: "Brand Video Production",
          description: "Promotional videos that communicate brand story and values"
        },
        {
          name: "Social Media Animation",
          description: "Engaging animated content optimized for social platforms"
        },
        {
          name: "UI Animation Systems",
          description: "Micro-interactions and animations for digital products"
        },
        {
          name: "Motion Guidelines",
          description: "Animation principles and guidelines for consistent brand motion"
        }
      ],
      process: [
        {
          phase: "Motion Strategy",
          duration: "1 week",
          description: "Animation style development and motion principles definition"
        },
        {
          phase: "Concept & Storyboarding",
          duration: "1-2 weeks",
          description: "Animation concepts, storyboards, and style frame development"
        },
        {
          phase: "Animation Production",
          duration: "2-3 weeks",
          description: "Animation creation, sound design, and post-production"
        },
        {
          phase: "Delivery & Guidelines",
          duration: "1 week",
          description: "Final deliverables and motion guidelines documentation"
        }
      ]
    },
    {
      id: 6,
      icon: "Layout",
      title: "Brand Guidelines & System Documentation",
      description: "Comprehensive brand standards that ensure consistent application across all touchpoints and teams.",
      priceRange: "$5K - $15K",
      timeline: "2-4 weeks",
      industries: ["All Industries", "Enterprise", "Franchises", "Agencies"],
      features: [
        {
          name: "Comprehensive Brand Guidelines",
          description: "Detailed documentation of all brand elements and usage rules"
        },
        {
          name: "Digital Asset Management",
          description: "Organized library of brand assets with easy access and download"
        },
        {
          name: "Application Examples",
          description: "Real-world examples showing correct brand implementation"
        },
        {
          name: "Team Training Materials",
          description: "Resources for educating teams on proper brand usage"
        },
        {
          name: "Brand Compliance Tools",
          description: "Checklists and templates to ensure consistent brand application"
        }
      ],
      process: [
        {
          phase: "Audit & Documentation",
          duration: "1 week",
          description: "Complete brand asset audit and documentation requirements gathering"
        },
        {
          phase: "Guidelines Development",
          duration: "2 weeks",
          description: "Comprehensive guidelines creation with usage rules and examples"
        },
        {
          phase: "Asset Organization",
          duration: "1 week",
          description: "Digital asset library setup and organization system implementation"
        },
        {
          phase: "Training & Rollout",
          duration: "1 week",
          description: "Team training sessions and guidelines rollout support"
        }
      ]
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <Helmet>
        <title>Services - Plevate | Capabilities Matrix</title>
        <meta name="description" content="Explore Plevate's comprehensive service offerings. From brand identity to digital experiences, discover capabilities that make brands impossible to ignore." />
        <meta name="keywords" content="brand identity, digital design, brand strategy, packaging design, motion design, brand guidelines" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero />

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
                Capabilities Matrix
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click any service to explore detailed capabilities, process, and investment information.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services?.map((service) => (
                <ServiceCard
                  key={service?.id}
                  service={service}
                  isExpanded={expandedService === service?.id}
                  onToggle={() => handleServiceToggle(service?.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <ServiceStats />

        {/* Process Preview */}
        <ProcessPreview />

        {/* Industry Focus */}
        <IndustryFocus />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Ready to Make Your Brand
                <span className="block text-accent">Impossible to Ignore?</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss which services align with your brand transformation goals. 
                Our brutalist approach ensures results that demand attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start a Brief
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t-2 border-concrete py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary border-2 border-primary">
                    <div className="w-full h-full bg-accent transform translate-x-1 translate-y-1"></div>
                  </div>
                  <span className="text-xl font-black text-primary">Plevate</span>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Making brands impossible to ignore through brutalist design principles and strategic thinking.
                </p>
                <div className="flex space-x-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble']?.map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-concrete-light border-2 border-concrete flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      <Icon name={social} size={16} />
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-accent transition-colors">Brand Identity</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Digital Experience</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Brand Strategy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Motion Design</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                  <li><a href="/case-study" className="hover:text-accent transition-colors">Case Studies</a></li>
                  <li><a href="/process" className="hover:text-accent transition-colors">Process</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t-2 border-concrete-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Plevate. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesPage;