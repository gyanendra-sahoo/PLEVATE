import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CaseStudyHero from './components/CaseStudyHero';
import ProjectTimeline from './components/ProjectTimeline';
import ProcessDocumentation from './components/ProcessDocumentation';
import ResultsShowcase from './components/ResultsShowcase';
import TechnicalSpecs from './components/TechnicalSpecs';
import TeamCredits from './components/TeamCredits';
import RelatedCaseStudies from './components/RelatedCaseStudies';
import Button from '../../components/ui/Button';
import AppIcon from '../../components/AppIcon';

// Move mock data outside component to prevent re-creation on every render
const CASE_STUDIES = [
  {
    id: 1,
    slug: "techflow-rebrand",
    title: "TechFlow Digital Transformation",
    category: "Brand Identity",
    year: "2024",
    description: "Complete digital transformation for a B2B SaaS platform, resulting in 340% increase in qualified leads and 89% improvement in user engagement metrics.",
    heroImage: "https://images.unsplash.com/photo-1504868481965-a7679ed88ac1",
    heroImageAlt: "Modern laptop displaying colorful dashboard interface with analytics charts and graphs on dark background",
    projectDuration: "16 Weeks",
    keyMetrics: [
      { value: "340%", label: "Lead Increase" },
      { value: "89%", label: "Engagement Up" },
      { value: "2.3x", label: "Conversion Rate" }
    ],
    client: {
      name: "TechFlow Solutions",
      industry: "B2B SaaS",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13e214607-1762091722999.png",
      logoAlt: "TechFlow company logo featuring geometric blue and orange design elements"
    }
  },
  {
    id: 2,
    slug: "greenspace-identity",
    title: "GreenSpace Sustainability Brand",
    category: "Environmental",
    year: "2024",
    description: "Sustainable brand identity for eco-conscious startup, achieving 250% growth in customer acquisition and industry recognition.",
    heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    heroImageAlt: "Hands holding small green plant sprouting from rich dark soil against blurred natural background",
    projectDuration: "12 Weeks",
    keyMetrics: [
      { value: "250%", label: "Growth Rate" },
      { value: "95%", label: "Brand Recall" },
      { value: "4.8/5", label: "User Rating" }
    ],
    client: {
      name: "GreenSpace Co.",
      industry: "Sustainability",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_122c3bdc6-1762091723647.png",
      logoAlt: "GreenSpace circular logo with leaf motif in various shades of green"
    }
  },
  {
    id: 3,
    slug: "fintech-revolution",
    title: "FinTech Revolution Platform",
    category: "Financial Technology",
    year: "2023",
    description: "Revolutionary fintech platform design that simplified complex financial processes, resulting in 180% user adoption increase.",
    heroImage: "https://images.unsplash.com/photo-1735405072036-42b2208c157b",
    heroImageAlt: "Modern smartphone displaying financial app interface with colorful charts and transaction data on marble surface",
    projectDuration: "20 Weeks",
    keyMetrics: [
      { value: "180%", label: "User Adoption" },
      { value: "67%", label: "Task Completion" },
      { value: "4.9/5", label: "App Store Rating" }
    ],
    client: {
      name: "FinTech Innovations",
      industry: "Financial Services",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1dff6c5dc-1762091724245.png",
      logoAlt: "FinTech Innovations logo featuring modern typography with gold and blue gradient elements"
    }
  }
];

const TIMELINE = [
  {
    title: "Discovery & Research",
    duration: "3 Weeks",
    icon: "Search",
    description: "Comprehensive market research, competitor analysis, and stakeholder interviews to understand the brand landscape and identify opportunities for differentiation.",
    deliverables: ["Market Analysis", "User Personas", "Brand Audit", "Competitive Landscape"],
    teamMembers: ["Sarah Chen - Research Lead", "Marcus Rodriguez - Strategy", "Emily Watson - UX Research"]
  },
  {
    title: "Strategy & Positioning",
    duration: "2 Weeks",
    icon: "Target",
    description: "Development of brand strategy, positioning framework, and messaging architecture that aligns with business objectives and resonates with target audiences.",
    deliverables: ["Brand Strategy", "Positioning Map", "Messaging Framework", "Brand Guidelines"],
    teamMembers: ["David Kim - Brand Strategist", "Lisa Thompson - Content Strategy"]
  },
  {
    title: "Design & Development",
    duration: "8 Weeks",
    icon: "Palette",
    description: "Creation of visual identity, digital assets, and brand applications across all touchpoints, ensuring consistency and impact at every interaction.",
    deliverables: ["Logo Design", "Visual Identity", "Website Design", "Marketing Materials"],
    teamMembers: ["Alex Johnson - Creative Director", "Maya Patel - Visual Designer", "Tom Wilson - Web Developer"]
  },
  {
    title: "Launch & Optimization",
    duration: "3 Weeks",
    icon: "Rocket",
    description: "Strategic brand launch with performance monitoring, user feedback collection, and iterative improvements to maximize impact and effectiveness.",
    deliverables: ["Launch Campaign", "Performance Metrics", "User Feedback", "Optimization Plan"],
    teamMembers: ["Jennifer Lee - Project Manager", "Carlos Martinez - Digital Marketing"]
  }
];

const PROCESS_STEPS = [
  {
    title: "Research & Discovery",
    description: "We began with extensive user research and competitive analysis to understand the market landscape and identify unique positioning opportunities. This phase involved stakeholder interviews, user surveys, and comprehensive brand audits.",
    challenge: "The client operated in a saturated market with numerous established competitors, making differentiation extremely challenging.",
    solution: "We identified an underserved niche within their target market and developed a unique value proposition that addressed specific pain points competitors were ignoring.",
    insight: "Sometimes the biggest opportunities lie in the spaces between what competitors are doing, not in trying to do what they do better.",
    tools: ["Figma", "Miro", "Google Analytics", "Hotjar", "Typeform"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1",
        alt: "Team members collaborating around whiteboard covered with colorful sticky notes and research findings",
        caption: "Research Workshop"
      },
      {
        src: "https://images.unsplash.com/photo-1515408201103-f7a8c194a15c",
        alt: "Multiple laptops displaying competitor analysis spreadsheets and market research data on wooden desk",
        caption: "Competitive Analysis"
      }
    ],
    metrics: [
      { value: "47", label: "Interviews" },
      { value: "1,200", label: "Survey Responses" }
    ]
  },
  {
    title: "Strategy Development",
    description: "Based on research insights, we developed a comprehensive brand strategy that included positioning, messaging architecture, and a detailed roadmap for implementation across all touchpoints.",
    challenge: "Balancing the need for innovation with the requirement to maintain trust and credibility in a conservative industry.",
    solution: "We created a dual-approach strategy that positioned the brand as both innovative and trustworthy, using progressive design elements within a framework of established industry conventions.",
    insight: "Innovation doesn't always mean revolution; sometimes it means thoughtful evolution that brings people along on the journey.",
    tools: ["Miro", "Notion", "Adobe Creative Suite", "Slack", "Zoom"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1690192064611-e87973e2afc5",
        alt: "Strategic planning session with team members pointing at large wall-mounted brand positioning diagram",
        caption: "Strategy Session"
      }
    ]
  },
  {
    title: "Visual Identity Creation",
    description: "We crafted a distinctive visual identity that balanced modern aesthetics with industry credibility, ensuring the brand would stand out while maintaining professional authority.",
    challenge: "Creating a visual identity that appealed to both technical decision-makers and end users with very different aesthetic preferences.",
    solution: "We developed a modular design system that could adapt its complexity based on the audience, using simplified versions for end users and more detailed versions for technical stakeholders.",
    insight: "The best design systems are chameleons - they maintain their core identity while adapting to different contexts and audiences.",
    tools: ["Adobe Illustrator", "Figma", "Sketch", "Principle", "InVision"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1607004010229-6048c57c2ab1",
        alt: "Designer working on logo concepts with multiple color variations and typography samples spread across desk",
        caption: "Logo Development"
      },
      {
        src: "https://images.unsplash.com/photo-1703720074944-b60b730c7289",
        alt: "Brand style guide showing color palette, typography hierarchy, and logo usage examples on tablet screen",
        caption: "Brand Guidelines"
      }
    ],
    metrics: [
      { value: "127", label: "Design Iterations" },
      { value: "15", label: "Stakeholder Reviews" }
    ]
  },
  {
    title: "Implementation & Launch",
    description: "The final phase involved implementing the new brand across all touchpoints, from digital platforms to physical materials, ensuring consistency and maximum impact at launch.",
    challenge: "Coordinating a simultaneous launch across multiple platforms and channels while maintaining quality and consistency.",
    solution: "We created a detailed launch timeline with built-in buffer periods and established clear quality checkpoints at each stage of implementation.",
    insight: "A successful brand launch is like conducting an orchestra - every element must be perfectly timed and harmonized to create the intended impact.",
    tools: ["Webflow", "WordPress", "Mailchimp", "Google Tag Manager", "Hotjar"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1684242282290-997cabc3ad06",
        alt: "Multiple devices displaying new website design with consistent branding across desktop, tablet, and mobile screens",
        caption: "Multi-Platform Launch"
      }
    ],
    metrics: [
      { value: "12", label: "Platforms Updated" },
      { value: "48hrs", label: "Launch Window" }
    ]
  }
];

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

  // Use useMemo to find current study to prevent unnecessary re-calculations
  const currentStudy = useMemo(() => {
    if (!slug) return null;
    return CASE_STUDIES?.find((study) => study?.slug === slug) || null;
  }, [slug]);

  // Set current study index when slug changes
  useEffect(() => {
    if (slug && currentStudy) {
      const studyIndex = CASE_STUDIES?.findIndex((study) => study?.slug === slug);
      if (studyIndex !== -1) {
        setCurrentStudyIndex(studyIndex);
      }
    }
  }, [slug, currentStudy]);

  // Handle navigation between case studies
  const handleNavigation = (direction) => {
    if (direction === 'next') {
      const nextIndex = (currentStudyIndex + 1) % CASE_STUDIES?.length;
      const nextStudy = CASE_STUDIES?.[nextIndex];
      if (nextStudy) {
        navigate(`/case-study/${nextStudy?.slug}`);
      }
    } else {
      const prevIndex = (currentStudyIndex - 1 + CASE_STUDIES?.length) % CASE_STUDIES?.length;
      const prevStudy = CASE_STUDIES?.[prevIndex];
      if (prevStudy) {
        navigate(`/case-study/${prevStudy?.slug}`);
      }
    }
  };

  // Mock before/after and results data
  const beforeAfter = useMemo(() => ({
    before: {
      image: "https://images.unsplash.com/photo-1471948955798-6fa215d09c57",
      imageAlt: "Old website design showing cluttered interface with outdated typography and poor visual hierarchy",
      description: "Outdated interface with poor user experience, low conversion rates, and inconsistent branding across touchpoints."
    },
    after: {
      image: "https://images.unsplash.com/photo-1725895521603-d9d9c46064b0",
      imageAlt: "New modern website design featuring clean layout, improved typography, and intuitive user interface",
      description: "Modern, user-centric design with improved conversion funnels, consistent branding, and enhanced user experience."
    }
  }), []);

  const businessMetrics = useMemo(() => [
    { icon: "TrendingUp", value: "340%", label: "Lead Generation", timeframe: "First 6 months" },
    { icon: "Users", value: "89%", label: "User Engagement", timeframe: "Post-launch" },
    { icon: "Target", value: "2.3x", label: "Conversion Rate", timeframe: "Year over year" },
    { icon: "Award", value: "4.8/5", label: "User Satisfaction", timeframe: "Current rating" }
  ], []);

  const testimonial = useMemo(() => ({
    quote: "Brand Forge didn't just redesign our brand - they transformed how our customers perceive and interact with our company. The results speak for themselves: we've seen unprecedented growth and engagement since the launch.",
    author: {
      name: "Sarah Mitchell",
      title: "CEO & Founder",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1644335326474-544fbcf8855f",
      avatarAlt: "Professional headshot of Sarah Mitchell, CEO, smiling woman with shoulder-length brown hair in navy blazer"
    }
  }), []);

  // Mock technical specifications
  const technicalSpecs = useMemo(() => ({
    architecture: [
      {
        title: "Scalable Design System",
        description: "Modular component library built with atomic design principles, ensuring consistency across all brand touchpoints while allowing for flexible implementation.",
        technologies: ["React", "Styled Components", "Storybook", "Figma Tokens"]
      },
      {
        title: "Performance Optimization",
        description: "Implemented advanced optimization techniques including lazy loading, image compression, and CDN integration for lightning-fast load times.",
        technologies: ["WebP", "Lazy Loading", "CDN", "Critical CSS"]
      }
    ],
    performance: [
      {
        title: "Core Web Vitals",
        description: "Achieved excellent Core Web Vitals scores through careful optimization of Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift.",
        technologies: ["Lighthouse", "PageSpeed Insights", "GTMetrix"]
      },
      {
        title: "Mobile Optimization",
        description: "Mobile-first approach with progressive enhancement, ensuring optimal performance across all device types and network conditions.",
        technologies: ["Progressive Web App", "Service Workers", "Responsive Images"]
      }
    ],
    security: [
      {
        title: "Data Protection",
        description: "Implemented comprehensive security measures including SSL encryption, secure headers, and GDPR-compliant data handling practices.",
        technologies: ["SSL/TLS", "HTTPS", "Security Headers", "GDPR Compliance"]
      },
      {
        title: "Access Control",
        description: "Multi-layered authentication system with role-based permissions and secure session management for administrative functions.",
        technologies: ["OAuth 2.0", "JWT", "Role-based Access", "Session Security"]
      }
    ],
    scalability: [
      {
        title: "Cloud Infrastructure",
        description: "Deployed on scalable cloud infrastructure with auto-scaling capabilities to handle traffic spikes and ensure consistent performance.",
        technologies: ["AWS", "Auto Scaling", "Load Balancing", "CloudFront"]
      },
      {
        title: "Content Management",
        description: "Headless CMS architecture allowing for easy content updates and multi-channel content distribution without technical dependencies.",
        technologies: ["Headless CMS", "API-First", "Content Delivery", "Multi-channel"]
      }
    ]
  }), []);

  const technicalChallenges = useMemo(() => [
    {
      problem: "Legacy system integration while maintaining performance standards during the transition period.",
      solution: "Implemented a phased migration approach with parallel systems running during transition, ensuring zero downtime.",
      impact: "Seamless user experience with 99.9% uptime during migration"
    },
    {
      problem: "Complex data visualization requirements for real-time analytics dashboard with large datasets.",
      solution: "Developed custom data processing pipeline with intelligent caching and progressive loading strategies.",
      impact: "Reduced dashboard load time by 75% while handling 10x more data"
    },
    {
      problem: "Cross-browser compatibility issues with advanced CSS features and animations across older browser versions.",
      solution: "Created progressive enhancement strategy with graceful fallbacks and polyfills for unsupported features.",
      impact: "Consistent experience across 98% of target browser versions"
    }
  ], []);

  // Mock team data
  const projectLead = useMemo(() => ({
    name: "Alexandra Chen",
    role: "Creative Director & Project Lead",
    avatar: "https://images.unsplash.com/photo-1698333338984-4dfef1bbcf23",
    avatarAlt: "Professional portrait of Alexandra Chen, Asian woman with long black hair wearing modern black blazer",
    bio: "With over 8 years of experience in brand strategy and digital design, Alexandra led this project from conception to launch, ensuring every detail aligned with the client's vision and business objectives.",
    skills: ["Brand Strategy", "Creative Direction", "Team Leadership", "Client Relations"]
  }), []);

  const teamMembers = useMemo(() => [
    {
      name: "Marcus Rodriguez",
      role: "Brand Strategist",
      roleIcon: "Target",
      avatar: "https://images.unsplash.com/photo-1734434570358-21badf4ba1c6",
      avatarAlt: "Professional headshot of Marcus Rodriguez, Hispanic man with short dark hair and friendly smile in blue shirt",
      contribution: "Developed comprehensive brand positioning and messaging framework that became the foundation for all creative decisions.",
      skills: ["Brand Positioning", "Market Research", "Messaging", "Competitive Analysis"],
      contact: {
        linkedin: "https://linkedin.com/in/marcus-rodriguez",
        portfolio: "https://marcusrodriguez.design",
        email: "marcus@brandforge.com"
      }
    },
    {
      name: "Emily Watson",
      role: "UX/UI Designer",
      roleIcon: "Palette",
      avatar: "https://images.unsplash.com/photo-1615885596624-83fc55f98934",
      avatarAlt: "Professional photo of Emily Watson, blonde woman with bright smile wearing white blouse in office setting",
      contribution: "Crafted the user experience and interface design that transformed complex processes into intuitive, engaging interactions.",
      skills: ["User Experience", "Interface Design", "Prototyping", "User Testing"],
      contact: {
        linkedin: "https://linkedin.com/in/emily-watson-ux",
        portfolio: "https://emilywatson.design"
      }
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      roleIcon: "Code",
      avatar: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
      avatarAlt: "Professional portrait of David Kim, Asian man with glasses and neat black hair wearing dark sweater",
      contribution: "Brought the designs to life with clean, performant code and innovative interactions that enhanced the user experience.",
      skills: ["React", "JavaScript", "CSS", "Performance Optimization"],
      contact: {
        linkedin: "https://linkedin.com/in/david-kim-dev",
        email: "david@brandforge.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Content Strategist",
      roleIcon: "FileText",
      avatar: "https://images.unsplash.com/photo-1612439289738-15a4cba74d9f",
      avatarAlt: "Professional headshot of Lisa Thompson, woman with curly red hair and warm smile in green blazer",
      contribution: "Developed compelling content strategy and messaging that resonated with target audiences and drove engagement.",
      skills: ["Content Strategy", "Copywriting", "SEO", "Brand Voice"],
      contact: {
        portfolio: "https://lisathompson.writer",
        email: "lisa@brandforge.com"
      }
    },
    {
      name: "James Wilson",
      role: "Motion Designer",
      roleIcon: "Play",
      avatar: "https://images.unsplash.com/photo-1571741146428-73c152544dad",
      avatarAlt: "Creative portrait of James Wilson, man with beard and casual style wearing denim jacket in studio setting",
      contribution: "Created engaging animations and micro-interactions that brought the brand to life and enhanced user engagement.",
      skills: ["After Effects", "Lottie", "CSS Animation", "Motion Graphics"],
      contact: {
        linkedin: "https://linkedin.com/in/james-wilson-motion",
        portfolio: "https://jameswilson.motion"
      }
    },
    {
      name: "Sofia Martinez",
      role: "Project Manager",
      roleIcon: "CheckSquare",
      avatar: "https://images.unsplash.com/photo-1662104935703-b4e193c3a852",
      avatarAlt: "Professional photo of Sofia Martinez, Latina woman with long dark hair in professional attire smiling confidently",
      contribution: "Orchestrated seamless project execution, ensuring all deliverables met quality standards and timeline requirements.",
      skills: ["Project Management", "Agile", "Team Coordination", "Quality Assurance"],
      contact: {
        linkedin: "https://linkedin.com/in/sofia-martinez-pm",
        email: "sofia@brandforge.com"
      }
    }
  ], []);

  // Mock related case studies
  const relatedStudies = useMemo(() => [
    {
      slug: "greenspace-identity",
      title: "GreenSpace Sustainability Brand",
      category: "Environmental",
      year: "2024",
      description: "Sustainable brand identity for eco-conscious startup achieving industry recognition.",
      thumbnail: "https://images.unsplash.com/photo-1693414854278-6b3703411629",
      thumbnailAlt: "Hands holding small green plant sprouting from rich soil representing sustainable growth and environmental consciousness",
      keyMetric: { value: "250%", label: "Growth Rate" }
    },
    {
      slug: "fintech-revolution",
      title: "FinTech Revolution Platform",
      category: "Financial Technology",
      year: "2023",
      description: "Revolutionary fintech platform design simplifying complex financial processes.",
      thumbnail: "https://images.unsplash.com/photo-1735405072036-42b2208c157b",
      thumbnailAlt: "Modern smartphone displaying financial app interface with colorful charts and transaction data on marble surface",
      keyMetric: { value: "180%", label: "User Adoption" }
    },
    {
      slug: "healthcare-innovation",
      title: "HealthTech Innovation Hub",
      category: "Healthcare Technology",
      year: "2023",
      description: "Digital health platform connecting patients with healthcare providers seamlessly.",
      thumbnail: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
      thumbnailAlt: "Medical professional using tablet device showing healthcare app interface in modern clinical setting",
      keyMetric: { value: "95%", label: "Patient Satisfaction" }
    }
  ], []);

  // Show case studies overview if no slug provided
  if (!slug) {
    return (
      <>
        <Helmet>
          <title>Case Studies - Brand Forge</title>
          <meta name="description" content="Explore our portfolio of transformative brand projects and digital solutions that drive measurable results." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          
          <main>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-primary text-primary-foreground">
              <div className="container mx-auto px-6 lg:px-8 text-center">
                <h1 className="text-4xl lg:text-6xl font-black mb-6">
                  Our Case Studies
                </h1>
                <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
                  Transformative brand projects that drive measurable results and create lasting impact.
                </p>
              </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {CASE_STUDIES?.map((study) => (
                    <div 
                      key={study?.id}
                      className="bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 brutalist-shadow cursor-pointer group"
                      onClick={() => navigate(`/case-study/${study?.slug}`)}
                    >
                      <div className="aspect-video bg-concrete-light overflow-hidden">
                        <img
                          src={study?.heroImage}
                          alt={study?.heroImageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold border border-accent">
                            {study?.category}
                          </span>
                          <span className="text-muted-foreground text-sm font-medium">
                            {study?.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-primary mb-3">
                          {study?.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {study?.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {study?.keyMetrics?.slice(0, 2)?.map((metric, index) => (
                              <div key={index} className="text-center">
                                <div className="text-lg font-black text-accent">
                                  {metric?.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric?.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          <AppIcon name="ArrowRight" size={20} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-accent text-accent-foreground">
              <div className="container mx-auto px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-black mb-6">
                    Ready to Create Your Success Story?
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    Let's discuss how we can transform your brand and drive exceptional results.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }

  // Show not found if study doesn't exist
  if (slug && !currentStudy) {
    return (
      <>
        <Helmet>
          <title>Case Study Not Found - Brand Forge</title>
          <meta name="description" content="The case study you're looking for doesn't exist." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-primary mb-4">Case Study Not Found</h1>
              <Button onClick={() => navigate('/case-study')}>
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Render individual case study
  return (
    <>
      <Helmet>
        <title>{currentStudy?.title} - Case Study | Brand Forge</title>
        <meta name="description" content={currentStudy?.description} />
        <meta property="og:title" content={`${currentStudy?.title} - Case Study | Brand Forge`} />
        <meta property="og:description" content={currentStudy?.description} />
        <meta property="og:image" content={currentStudy?.heroImage} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <CaseStudyHero
            caseStudy={currentStudy}
            onNavigate={handleNavigation}
          />

          {/* Project Timeline */}
          <ProjectTimeline timeline={TIMELINE} />

          {/* Process Documentation */}
          <ProcessDocumentation processSteps={PROCESS_STEPS} />

          {/* Results Showcase */}
          <ResultsShowcase
            beforeAfter={beforeAfter}
            businessMetrics={businessMetrics}
            testimonial={testimonial} 
          />

          {/* Technical Specifications */}
          <TechnicalSpecs
            specifications={technicalSpecs}
            challenges={technicalChallenges}
          />

          {/* Team Credits */}
          <TeamCredits
            teamMembers={teamMembers}
            projectLead={projectLead}
          />

          {/* Related Case Studies */}
          <RelatedCaseStudies relatedStudies={relatedStudies} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-black mb-6">
                  Ready to Transform Your Brand?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's create something impossible to ignore together. Start your transformation journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent brutalist-shadow"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => navigate('/contact')}>
                    Start Your Brief
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    iconName="Phone"
                    iconPosition="left">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground border-2 border-accent hover:bg-accent/90 transition-colors duration-300 brutalist-shadow z-50"
          aria-label="Scroll to top"
        >
          <AppIcon name="ArrowUp" size={20} className="mx-auto" />
        </button>
      </div>
    </>
  );
};

export default CaseStudyPage;