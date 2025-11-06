import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const IndustryFocus = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: "Rocket",
      name: "Tech & SaaS",
      description: "Startups to scale-ups disrupting traditional industries",
      challenges: ["Differentiation in crowded markets", "Technical complexity communication", "Rapid growth scaling"],
      solutions: ["Bold visual systems that cut through noise", "Clear value proposition architecture", "Scalable brand frameworks"],
      caseStudy: "How we helped CloudSync increase brand recognition by 400%",
      clients: ["CloudSync", "DataFlow", "TechNova", "StartupX"]
    },
    {
      icon: "Heart",
      name: "Healthcare & Wellness",
      description: "Medical practices, wellness brands, and health tech companies",
      challenges: ["Trust and credibility building", "Complex service explanation", "Regulatory compliance"],
      solutions: ["Professional yet approachable branding", "Clear information hierarchy", "Compliant visual systems"],
      caseStudy: "Transforming MedCare\'s patient experience through brand",
      clients: ["MedCare Plus", "Wellness Hub", "HealthTech Pro", "VitalCare"]
    },
    {
      icon: "TrendingUp",
      name: "Finance & Fintech",
      description: "Financial services, investment firms, and fintech startups",
      challenges: ["Security and trust perception", "Complex product simplification", "Regulatory requirements"],
      solutions: ["Authority-building visual identity", "Simplified communication design", "Compliant brand systems"],
      caseStudy: "How InvestPro gained 200% more qualified leads",
      clients: ["InvestPro", "FinanceFlow", "CryptoVault", "WealthWise"]
    },
    {
      icon: "ShoppingBag",
      name: "E-commerce & Retail",
      description: "Online stores, retail brands, and consumer products",
      challenges: ["Brand differentiation", "Customer loyalty building", "Multi-channel consistency"],
      solutions: ["Memorable brand experiences", "Emotional connection design", "Omnichannel brand systems"],
      caseStudy: "StyleCo\'s 300% increase in brand loyalty scores",
      clients: ["StyleCo", "RetailMax", "ShopSmart", "BrandBox"]
    },
    {
      icon: "Users",
      name: "Professional Services",
      description: "Consulting firms, agencies, and B2B service providers",
      challenges: ["Expertise demonstration", "Trust building", "Service differentiation"],
      solutions: ["Authority-focused branding", "Credibility-building design", "Professional visual systems"],
      caseStudy: "ConsultPro\'s transformation to industry leader",
      clients: ["ConsultPro", "ServiceMax", "ExpertHub", "ProAdvice"]
    },
    {
      icon: "GraduationCap",
      name: "Education & Training",
      description: "Educational institutions, online courses, and training providers",
      challenges: ["Engagement and motivation", "Complex content delivery", "Diverse audience needs"],
      solutions: ["Engaging visual systems", "Clear learning pathways", "Inclusive design approaches"],
      caseStudy: "EduTech\'s 250% enrollment increase through rebranding",
      clients: ["EduTech", "LearnMore", "SkillUp", "KnowledgeHub"]
    }
  ];

  return (
    <section className="py-16 bg-concrete-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
            Industry Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep understanding of industry challenges enables us to create brands that resonate with your specific audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industry Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {industries?.map((industry, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full text-left p-4 border-2 transition-all duration-300 ${
                    activeIndustry === index
                      ? 'border-accent bg-accent text-white' :'border-concrete bg-card text-primary hover:border-accent/50'
                  }`}
                  style={{
                    boxShadow: activeIndustry === index ? '4px 4px 0px #000000' : '2px 2px 0px #000000'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 border-2 flex items-center justify-center ${
                      activeIndustry === index 
                        ? 'border-white bg-white' :'border-primary bg-concrete-light'
                    }`}>
                      <Icon 
                        name={industry?.icon} 
                        size={20} 
                        color={activeIndustry === index ? "#FF6B35" : "#1A1A1A"} 
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{industry?.name}</h3>
                      <p className={`text-xs mt-1 ${
                        activeIndustry === index ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        {industry?.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border-2 border-concrete p-8"
              style={{ boxShadow: '8px 8px 0px #000000' }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent border-2 border-primary flex items-center justify-center rotate-12">
                  <Icon name={industries?.[activeIndustry]?.icon} size={32} color="#FFFFFF" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary">
                    {industries?.[activeIndustry]?.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {industries?.[activeIndustry]?.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Challenges */}
                <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name="AlertTriangle" size={16} className="mr-2 text-conversion" />
                    Common Challenges
                  </h4>
                  <div className="space-y-2">
                    {industries?.[activeIndustry]?.challenges?.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-conversion mt-2"></div>
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-accent" />
                    Our Solutions
                  </h4>
                  <div className="space-y-2">
                    {industries?.[activeIndustry]?.solutions?.map((solution, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent mt-2"></div>
                        <span className="text-sm text-muted-foreground">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study & Clients */}
              <div className="pt-6 border-t-2 border-concrete-light">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2 flex items-center">
                      <Icon name="ExternalLink" size={16} className="mr-2 text-accent" />
                      Featured Case Study
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {industries?.[activeIndustry]?.caseStudy}
                    </p>
                    <button className="text-accent font-semibold text-sm hover:underline">
                      Read Full Case Study →
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 flex items-center">
                      <Icon name="Users" size={16} className="mr-2 text-accent" />
                      Recent Clients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industries?.[activeIndustry]?.clients?.map((client, index) => (
                        <span
                          key={index}
                          className="text-xs bg-concrete-light text-primary px-2 py-1 font-medium"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;