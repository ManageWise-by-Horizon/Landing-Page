import { Brain, Users, Zap, BarChart3, Play } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export function WhyChooseSection() {
  const { t } = useI18n();

  const features = [
    {
      icon: Brain,
      title: t('why.feature1.title'),
      description: t('why.feature1.desc'),
      color: 'text-brand-primary'
    },
    {
      icon: Users,
      title: t('why.feature2.title'),
      description: t('why.feature2.desc'),
      color: 'text-brand-accent'
    },
    {
      icon: Zap,
      title: t('why.feature3.title'),
      description: t('why.feature3.desc'),
      color: 'text-brand-success'
    },
    {
      icon: BarChart3,
      title: t('why.feature4.title'),
      description: t('why.feature4.desc'),
      color: 'text-brand-secondary'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('why.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl ${feature.color === 'text-brand-primary' ? 'bg-brand-primary/10' : 
                  feature.color === 'text-brand-accent' ? 'bg-brand-accent/10' :
                  feature.color === 'text-brand-success' ? 'bg-brand-success/10' : 'bg-brand-secondary/10'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Video Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                {t('why.team.title')}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {t('why.team.description')}
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary">5</div>
                  <div className="text-sm text-gray-600">{t('why.team.cofounders')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-accent">UPC</div>
                  <div className="text-sm text-gray-600">{t('why.team.engineering')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-success">2024</div>
                  <div className="text-sm text-gray-600">{t('why.team.founded')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors duration-300 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-4 text-black">
                  <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-10 h-10 text-black ml-1" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-black">{t('why.team.video')}</p>
                    <p className="text-gray-600 font-medium">{t('why.team.duration')}</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-success rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-accent rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Additional benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-brand-primary mb-2">99.9%</div>
            <div className="text-gray-600">Uptime garantizado</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-brand-accent mb-2">50+</div>
            <div className="text-gray-600">Integraciones disponibles</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-brand-success mb-2">24h</div>
            <div className="text-gray-600">Tiempo de implementación</div>
          </div>
        </div>
      </div>
    </section>
  );
}