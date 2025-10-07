import { I18nProvider } from './hooks/useI18n';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BoostSection } from './components/BoostSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <WhyChooseSection />
          <BoostSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}