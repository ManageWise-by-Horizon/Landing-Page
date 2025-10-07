import { CheckCircle, ArrowRight, TrendingUp, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../hooks/useI18n';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BoostSection() {
  const { t } = useI18n();

  const benefits = [
    t('boost.benefit1'),
    t('boost.benefit2'),
    t('boost.benefit3'),
    t('boost.benefit4')
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-brand-accent" />
                <span className="text-brand-accent font-bold tracking-wider text-lg">{t('boost.performance')}</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                {t('boost.title')}
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                {t('boost.subtitle')}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-success flex-shrink-0 mt-0.5" />
                  <span className="text-black text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">{t('boost.action')}</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-3 group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                  <div>
                    <p className="font-bold text-black group-hover:text-black">{t('boost.video')}</p>
                    <p className="text-sm text-gray-600 font-medium group-hover:text-gray-600">{t('boost.video.duration')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-brand-accent hover:bg-brand-success text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {t('boost.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-300">
              <div>
                <div className="text-3xl font-bold text-brand-accent">2.5x</div>
                <div className="text-black font-semibold">{t('boost.delivery')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-accent">85%</div>
                <div className="text-black font-semibold">{t('boost.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1637073849640-b283dcd9a111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNjcnVtJTIwdGVhbSUyMHdvcmtpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU5MjYzNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Scrum team dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-success/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}