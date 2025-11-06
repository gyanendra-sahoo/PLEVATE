import React from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import WorkShowcase from "./components/WorkShowcase";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import ProcessNavigation from "./components/ProcessNavigation";
import AboutSection from "./components/AboutSection";
import ClientLogos from "./components/ClientLogos";
import ContactForm from "./components/ContactForm";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Header */}
      <Header />

      {/* Page Sections */}
      <main className="pt-16">
        <HeroSection />
        <WorkShowcase />
        <CapabilitiesGrid />
        <ProcessNavigation />
        <AboutSection />
        <ClientLogos />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t-2 border-concrete py-12 mt-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 border-2 border-primary relative">
                  <div className="w-full h-full bg-accent absolute top-1 left-1"></div>
                </div>
                <span className="text-xl font-black">Plevate</span>
              </div>

              <p className="text-muted-foreground max-w-md">
                Making brands impossible to ignore through brutalist design principles
                and strategic thinking.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                {["Behance", "Dribbble", "Instagram", "Twitter"].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border-2 border-concrete hover:border-accent hover:bg-accent brutalist-shadow transition-all duration-300"
                  >
                    <span className="sr-only">{s}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground brutalist-text">
                <li><a href="/services" className="hover:underline">Brand Identity</a></li>
                <li><a href="/services" className="hover:underline">Digital Experience</a></li>
                <li><a href="/services" className="hover:underline">Brand Strategy</a></li>
                <li><a href="/services" className="hover:underline">Motion Design</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground brutalist-text">
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/case-study" className="hover:underline">Case Studies</a></li>
                <li><a href="/process" className="hover:underline">Process</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t-2 border-concrete-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Plevate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
