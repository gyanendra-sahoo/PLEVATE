import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TeamSection from './components/TeamSection';
import FoundingStorySection from './components/FoundingStorySection';
import ValuesSection from './components/ValuesSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Brand Forge | Making Brands Impossible to Ignore</title>
        <meta 
          name="description" 
          content="Discover Brand Forge's philosophy of brutal honesty and creative brilliance. Meet our team of strategists and designers who architect brand experiences that demand attention and refuse to be forgotten." 
        />
        <meta name="keywords" content="brand agency, creative team, brand philosophy, design strategy, brand forge team" />
        <meta property="og:title" content="About Brand Forge - Creative Rebels Making Brands Impossible to Ignore" />
        <meta property="og:description" content="At the intersection of brutal honesty and creative brilliance, we architect brand experiences that demand attention. Meet the team behind the impossible-to-ignore philosophy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <PhilosophySection />
          <FoundingStorySection />
          <TeamSection />
          <ValuesSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12 border-t-4 border-accent">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-accent border-2 border-white">
                    <div className="w-full h-full bg-white transform translate-x-1 translate-y-1"></div>
                  </div>
                  <span className="text-xl font-black tracking-tight">Brand Forge</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Making brands impossible to ignore through brutal honesty and creative brilliance.
                </p>
              </div>
              
              <div>
                <h4 className="font-black text-lg mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/homepage" className="block text-white/80 hover:text-accent transition-colors">Home</a>
                  <a href="/case-study" className="block text-white/80 hover:text-accent transition-colors">Case Studies</a>
                  <a href="/services" className="block text-white/80 hover:text-accent transition-colors">Services</a>
                  <a href="/process" className="block text-white/80 hover:text-accent transition-colors">Process</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-black text-lg mb-4">Get in Touch</h4>
                <div className="space-y-2 text-white/80">
                  <p>hello@brandforge.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>Brooklyn, NY</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/60">
                © {new Date()?.getFullYear()} Brand Forge. All rights reserved. Making brands impossible to ignore since 2016.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;