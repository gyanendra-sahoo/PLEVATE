import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ServicesPage from './pages/services';
import Contact from './pages/contact';
import ProcessPage from './pages/process';
import About from './pages/about';
import CaseStudyPage from './pages/case-study';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;