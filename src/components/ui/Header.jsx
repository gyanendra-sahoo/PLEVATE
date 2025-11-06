import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import BriefFormPopup from '../BriefFormPopup';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBriefPopupOpen, setIsBriefPopupOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Case Studies', path: '/case-study', icon: 'FolderOpen' },
    { name: 'Services', path: '/services', icon: 'Briefcase' },
    { name: 'Process', path: '/process', icon: 'GitBranch' },
    { name: 'About', path: '/about', icon: 'Users' },
  ];

  const moreItems = [
    { name: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleBriefPopupOpen = () => {
    setIsBriefPopupOpen(true);
  };

  const handleBriefPopupClose = () => {
    setIsBriefPopupOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm border-b-2 border-concrete' : 'bg-background'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-2 group"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 bg-primary border-2 border-primary transform group-hover:rotate-12 transition-transform duration-300">
                <div className="w-full h-full bg-accent transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
              <span className="text-xl font-black text-primary tracking-tight">
                Plevate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-300 group ${
                    isActivePath(item?.path)
                      ? 'text-primary' :'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="absolute inset-0 bg-accent transform -skew-x-12 scale-110"></div>
                  )}
                  <div className="absolute inset-0 bg-concrete-light transform -skew-x-12 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                </Link>
              ))}
              
              {/* More Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-1 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-300">
                  <span>More</span>
                  <Icon name="ChevronDown" size={16} />
                </button>
                
                <div className="absolute top-full right-0 mt-2 w-48 bg-card border-2 border-concrete opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 brutalist-shadow">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                        isActivePath(item?.path)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-card-foreground hover:bg-concrete-light'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                variant="default" 
                onClick={handleBriefPopupOpen}
                className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion brutalist-shadow hover:shadow-brutalist-sm transition-all duration-300"
              >
                Start a Brief
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary hover:text-accent transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <nav className="px-6 py-4 bg-card border-t-2 border-concrete">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-colors duration-300 border-b border-concrete-light last:border-b-0 ${
                    isActivePath(item?.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-card-foreground hover:bg-concrete-light'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-concrete-light">
                <Button 
                  variant="default" 
                  fullWidth
                  onClick={handleBriefPopupOpen}
                  className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion"
                >
                  Start a Brief
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Brief Form Popup */}
      <BriefFormPopup 
        isOpen={isBriefPopupOpen}
        onClose={handleBriefPopupClose}
      />
    </>
  );
};

export default Header;