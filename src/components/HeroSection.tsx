import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../hooks/useI18n';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}{' '}
                <span className="text-brand-primary">{t('hero.brand')}</span>
              </h1>
              <p className="text-xl font-semibold text-gray-700">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-lg cursor-pointer"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-lg cursor-pointer"
              >
                <Play className="mr-2 w-5 h-5" />
                {t('hero.demo')}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">500+</div>
                <div className="text-sm text-gray-700 font-medium">Startups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">40%</div>
                <div className="text-sm text-gray-700 font-medium">Más productividad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">24/7</div>
                <div className="text-sm text-gray-700 font-medium">Soporte IA</div>
              </div>
            </div>
          </div>

          {/* Hero Image + Download card */}

          <div className="relative gap-4">
            <div className="relative z-10 flex flex-col items-center gap-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzU5MjYzNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="flex gap-8">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/images/appstore.webp"
                    alt="Download on the App Store"
                    className="h-12 w-auto hover:scale-105 transition-transform"
                  />
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/images/googleplay.webp"
                    alt="Get it on Google Play"
                    className="h-12 w-auto hover:scale-105 transition-transform"
                  />
                </a>
              </div>

            </div>


          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-success rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>

    </section>
  );
}
