import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServiceStats = () => {
  const stats = [
    {
      icon: "TrendingUp",
      value: "300%",
      label: "Average Brand Recognition Increase",
      description: "Measured across 50+ client projects over 24 months"
    },
    {
      icon: "Users",
      value: "150+",
      label: "Brands Transformed",
      description: "From startups to Fortune 500 companies"
    },
    {
      icon: "Award",
      value: "25+",
      label: "Industry Awards",
      description: "Recognition for creative excellence and results"
    },
    {
      icon: "Clock",
      value: "6-12",
      label: "Weeks Average Timeline",
      description: "From brief to brand launch"
    }
  ];

  return (
    <section className="py-16 bg-concrete-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
            Results That Demand Attention
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our brutalist approach to brand building delivers measurable impact across every metric that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border-2 border-concrete p-6 text-center group hover:border-accent transition-colors duration-300"
              style={{ boxShadow: '4px 4px 0px #000000' }}
            >
              <div className="w-16 h-16 bg-accent border-2 border-primary mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Icon name={stat?.icon} size={28} color="#FFFFFF" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">{stat?.value}</div>
              <h3 className="font-bold text-primary mb-2 text-sm">{stat?.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{stat?.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;