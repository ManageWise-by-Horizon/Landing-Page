import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../hooks/useI18n';

export function Navigation() {
  const { language, setLanguage, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-semibold text-brand-secondary">ManageWize</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="text-sm text-gray-700 hover:text-brand-primary transition-colors cursor-pointer"
              >
                {language.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher Mobile */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-sm text-gray-700 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 hover:text-brand-primary transition-colors py-2 cursor-pointer"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-brand-primary transition-colors py-2 cursor-pointer"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-brand-primary transition-colors py-2 cursor-pointer"
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-brand-primary transition-colors py-2 cursor-pointer"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}