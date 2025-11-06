import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProcessHero from './components/ProcessHero';
import StickyNavigation from './components/StickyNavigation';
import ProcessSteps from './components/ProcessSteps';
import ProcessTimeline from './components/ProcessTimeline';
import ProcessCTA from './components/ProcessCTA';

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Process - Plevate | Systematic Brand Architecture</title>
        <meta 
          name="description" 
          content="Discover Plevate's proven 4-step methodology that transforms ambitious brands into impossible-to-ignore market forces. Transparent timeline, clear deliverables, measurable results." 
        />
        <meta name="keywords" content="brand process, brand methodology, brand strategy, brand development, brand architecture" />
        <meta property="og:title" content="Our Process - Plevate | Systematic Brand Architecture" />
        <meta property="og:description" content="Four proven steps that transform ambitious brands into impossible-to-ignore market forces. No fluff, no filler—just systematic brand architecture that delivers results." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/process" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <StickyNavigation />
        <ProcessHero />
        <ProcessSteps />
        <ProcessTimeline />
        <ProcessCTA />
      </div>
    </>
  );
};

export default ProcessPage;