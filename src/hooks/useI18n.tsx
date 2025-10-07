import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.testimonials': 'Testimonios',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Revoluciona la gestión de proyectos Scrum con',
    'hero.brand': 'ManageWize',
    'hero.subtitle': 'Potenciado por Inteligencia Artificial',
    'hero.description': 'Optimiza la colaboración en equipos multidisciplinarios con herramientas avanzadas de IA que automatizan procesos, analizan datos en tiempo real y fomentan la eficiencia operativa.',
    'hero.cta': 'Comienza Gratis',
    'hero.demo': 'Ver Demo',
    'hero.mobile.title': 'Descarga la App Móvil',
    'hero.mobile.ios': 'Descargar para iOS',
    'hero.mobile.android': 'Descargar para Android',
    
    // Why Choose Section
    'why.title': '¿Por qué elegir ManageWize?',
    'why.subtitle': 'La herramienta definitiva para equipos Scrum modernos',
    'why.feature1.title': 'IA Predictiva',
    'why.feature1.desc': 'Análisis predictivos que anticipan obstáculos y optimizan la planificación de sprints',
    'why.feature2.title': 'Colaboración Remota',
    'why.feature2.desc': 'Herramientas diseñadas específicamente para equipos distribuidos globalmente',
    'why.feature3.title': 'Automatización Inteligente',
    'why.feature3.desc': 'Automatiza tareas repetitivas y enfócate en lo que realmente importa',
    'why.feature4.title': 'Insights en Tiempo Real',
    'why.feature4.desc': 'Dashboards intuitivos con métricas y KPIs actualizados instantáneamente',
    'why.team.title': 'Conoce al Equipo Detrás de ManageWize',
    'why.team.description': 'Descubre a los estudiantes apasionados de la UPC que están revolucionando la gestión de proyectos con IA. Conoce nuestra visión, misión y la innovación que impulsa nuestra plataforma.',
    'why.team.cofounders': 'Co-fundadores',
    'why.team.engineering': 'Ingeniería',
    'why.team.founded': 'Fundada',
    'why.team.video': 'Conoce Nuestro Equipo',
    'why.team.duration': '3 min historia',
    
    // Boost Section
    'boost.performance': 'POTENCIADOR DE RENDIMIENTO',
    'boost.title': 'Lleva tu equipo Scrum al siguiente nivel',
    'boost.subtitle': 'Transforma la manera en que tu startup gestiona proyectos',
    'boost.benefit1': 'Aumenta la productividad hasta un 40%',
    'boost.benefit2': 'Reduce el tiempo de planificación en 60%',
    'boost.benefit3': 'Mejora la calidad de entregables',
    'boost.benefit4': 'Facilita la toma de decisiones basada en datos',
    'boost.action': 'Ve ManageWize en Acción',
    'boost.video': 'Ver Demo del Producto',
    'boost.video.duration': '5 min resumen',
    'boost.cta': 'Comenzar Ahora',
    'boost.delivery': 'Entrega más rápida',
    'boost.satisfaction': 'Satisfacción del equipo',
    
    // Testimonials
    'testimonials.title': 'Lo que dicen nuestros usuarios',
    'testimonials.subtitle': 'Startups que ya confían en ManageWize',
    'testimonials.trusted': 'Confiado por startups innovadoras en todo el mundo',
    'testimonials.1.name': 'Carlos Mendoza',
    'testimonials.1.role': 'CTO en TechStart',
    'testimonials.1.text': 'ManageWize transformó completamente nuestra metodología Scrum. La IA nos ayuda a predecir problemas antes de que ocurran.',
    'testimonials.2.name': 'Ana García',
    'testimonials.2.role': 'Product Manager en InnovaCorp',
    'testimonials.2.text': 'La mejor inversión que hemos hecho. Nuestro equipo es 3x más eficiente desde que usamos ManageWize.',
    'testimonials.3.name': 'Diego López',
    'testimonials.3.role': 'Scrum Master en DevFlow',
    'testimonials.3.text': 'Increíble cómo la plataforma se adapta a nuestras necesidades. Los insights son invaluables.',
    
    // Pricing
    'pricing.title': 'Planes que se adaptan a tu startup',
    'pricing.subtitle': 'Elige el plan perfecto para tu equipo',
    'pricing.starter.title': 'Starter',
    'pricing.starter.price': 'Gratis',
    'pricing.starter.desc': 'Perfecto para equipos pequeños',
    'pricing.starter.feature1': 'Hasta 5 usuarios',
    'pricing.starter.feature2': '3 proyectos activos',
    'pricing.starter.feature3': 'Reportes básicos',
    'pricing.starter.feature4': 'Soporte por email',
    'pricing.pro.title': 'Professional',
    'pricing.pro.price': '$29',
    'pricing.pro.period': '/mes',
    'pricing.pro.desc': 'Para equipos en crecimiento',
    'pricing.pro.feature1': 'Usuarios ilimitados',
    'pricing.pro.feature2': 'Proyectos ilimitados',
    'pricing.pro.feature3': 'IA predictiva avanzada',
    'pricing.pro.feature4': 'Integraciones completas',
    'pricing.pro.feature5': 'Soporte prioritario',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.price': 'Personalizado',
    'pricing.enterprise.desc': 'Para organizaciones grandes',
    'pricing.enterprise.feature1': 'Todo en Professional',
    'pricing.enterprise.feature2': 'Análisis personalizado',
    'pricing.enterprise.feature3': 'Integración dedicada',
    'pricing.enterprise.feature4': 'Gerente de cuenta',
    'pricing.cta': 'Comenzar',
    'pricing.contact': 'Contactar',
    'pricing.popular': 'Más Popular',
    'pricing.trial': 'Todos los planes incluyen prueba gratuita de 14 días • No se requiere tarjeta de crédito',
    
    // Contact
    'contact.title': 'Ponte en contacto',
    'contact.subtitle': 'Estamos aquí para ayudarte a transformar tu gestión de proyectos',
    'contact.getintouch': 'Ponte en Contacto',
    'contact.about': 'Acerca de Horizon',
    'contact.about.desc': 'Somos un startup innovador fundado por estudiantes de la UPC, dedicado a revolucionar la gestión de proyectos en el ecosistema tecnológico mediante soluciones impulsadas por inteligencia artificial.',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.company': 'Empresa',
    'contact.message': 'Mensaje',
    'contact.placeholder': 'Cuéntanos sobre tu proyecto y cómo ManageWize puede ayudar...',
    'contact.send': 'Enviar mensaje',
    
    // Footer
    'footer.description': 'Revolucionando la gestión de proyectos Scrum con inteligencia artificial.',
    'footer.product': 'Producto',
    'footer.features': 'Características',
    'footer.integrations': 'Integraciones',
    'footer.security': 'Seguridad',
    'footer.company': 'Empresa',
    'footer.about': 'Acerca de',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.support': 'Soporte',
    'footer.help': 'Centro de ayuda',
    'footer.docs': 'Documentación',
    'footer.community': 'Comunidad',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.mobile.title': 'Descarga la App',
    'footer.mobile.subtitle': 'Gestiona tus proyectos desde cualquier lugar',
    'footer.mobile.ios': 'Disponible en App Store',
    'footer.mobile.android': 'Obtener en Google Play',
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.testimonials': 'Testimonials',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Revolutionize Scrum project management with',
    'hero.brand': 'ManageWize',
    'hero.subtitle': 'Powered by Artificial Intelligence',
    'hero.description': 'Optimize collaboration in multidisciplinary teams with advanced AI tools that automate processes, analyze real-time data, and foster operational efficiency.',
    'hero.cta': 'Get Started Free',
    'hero.demo': 'Watch Demo',
    'hero.mobile.title': 'Download Mobile App',
    'hero.mobile.ios': 'Download for iOS',
    'hero.mobile.android': 'Download for Android',
    
    // Why Choose Section
    'why.title': 'Why choose ManageWize?',
    'why.subtitle': 'The ultimate tool for modern Scrum teams',
    'why.feature1.title': 'Predictive AI',
    'why.feature1.desc': 'Predictive analytics that anticipate obstacles and optimize sprint planning',
    'why.feature2.title': 'Remote Collaboration',
    'why.feature2.desc': 'Tools specifically designed for globally distributed teams',
    'why.feature3.title': 'Smart Automation',
    'why.feature3.desc': 'Automate repetitive tasks and focus on what really matters',
    'why.feature4.title': 'Real-Time Insights',
    'why.feature4.desc': 'Intuitive dashboards with metrics and KPIs updated instantly',
    'why.team.title': 'Meet the Team Behind ManageWize',
    'why.team.description': 'Discover the passionate students from UPC who are revolutionizing project management with AI. Learn about our vision, mission, and the innovation driving our platform.',
    'why.team.cofounders': 'Co-founders',
    'why.team.engineering': 'Engineering',
    'why.team.founded': 'Founded',
    'why.team.video': 'Meet Our Team',
    'why.team.duration': '3 min story',
    
    // Boost Section
    'boost.performance': 'PERFORMANCE BOOST',
    'boost.title': 'Take your Scrum team to the next level',
    'boost.subtitle': 'Transform how your startup manages projects',
    'boost.benefit1': 'Increase productivity by up to 40%',
    'boost.benefit2': 'Reduce planning time by 60%',
    'boost.benefit3': 'Improve deliverable quality',
    'boost.benefit4': 'Enable data-driven decision making',
    'boost.action': 'See ManageWize in Action',
    'boost.video': 'Watch Product Demo',
    'boost.video.duration': '5 min overview',
    'boost.cta': 'Start Now',
    'boost.delivery': 'Faster delivery',
    'boost.satisfaction': 'Team satisfaction',
    
    // Testimonials
    'testimonials.title': 'What our users say',
    'testimonials.subtitle': 'Startups that already trust ManageWize',
    'testimonials.1.name': 'Carlos Mendoza',
    'testimonials.1.role': 'CTO at TechStart',
    'testimonials.1.text': 'ManageWize completely transformed our Scrum methodology. The AI helps us predict problems before they happen.',
    'testimonials.2.name': 'Ana García',
    'testimonials.2.role': 'Product Manager at InnovaCorp',
    'testimonials.2.text': 'The best investment we\'ve made. Our team is 3x more efficient since using ManageWize.',
    'testimonials.3.name': 'Diego López',
    'testimonials.3.role': 'Scrum Master at DevFlow',
    'testimonials.3.text': 'Amazing how the platform adapts to our needs. The insights are invaluable.',
    'testimonials.trusted': 'Trusted by innovative startups worldwide',
    
    // Pricing
    'pricing.title': 'Plans that adapt to your startup',
    'pricing.subtitle': 'Choose the perfect plan for your team',
    'pricing.starter.title': 'Starter',
    'pricing.starter.price': 'Free',
    'pricing.starter.desc': 'Perfect for small teams',
    'pricing.starter.feature1': 'Up to 5 users',
    'pricing.starter.feature2': '3 active projects',
    'pricing.starter.feature3': 'Basic reports',
    'pricing.starter.feature4': 'Email support',
    'pricing.pro.title': 'Professional',
    'pricing.pro.price': '$29',
    'pricing.pro.period': '/month',
    'pricing.pro.desc': 'For growing teams',
    'pricing.pro.feature1': 'Unlimited users',
    'pricing.pro.feature2': 'Unlimited projects',
    'pricing.pro.feature3': 'Advanced predictive AI',
    'pricing.pro.feature4': 'Full integrations',
    'pricing.pro.feature5': 'Priority support',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.desc': 'For large organizations',
    'pricing.enterprise.feature1': 'Everything in Professional',
    'pricing.enterprise.feature2': 'Custom analytics',
    'pricing.enterprise.feature3': 'Dedicated integration',
    'pricing.enterprise.feature4': 'Account manager',
    'pricing.cta': 'Get Started',
    'pricing.contact': 'Contact',
    'pricing.popular': 'Most Popular',
    'pricing.trial': 'All plans include 14-day free trial • No credit card required',
    
    // Contact
    'contact.title': 'Get in touch',
    'contact.subtitle': 'We\'re here to help you transform your project management',
    'contact.name': 'Full name',
    'contact.email': 'Email address',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.getintouch': 'Get in Touch',
    'contact.about': 'About Horizon',
    'contact.about.desc': 'We are an innovative startup founded by UPC students, dedicated to revolutionizing project management in the tech ecosystem through AI-powered solutions.',
    'contact.placeholder': 'Tell us about your project and how ManageWize can help...',
    
    // Footer
    'footer.description': 'Revolutionizing Scrum project management with artificial intelligence.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.integrations': 'Integrations',
    'footer.security': 'Security',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.docs': 'Documentation',
    'footer.community': 'Community',
    'footer.rights': 'All rights reserved.',
    'footer.mobile.title': 'Download the App',
    'footer.mobile.subtitle': 'Manage your projects from anywhere',
    'footer.mobile.ios': 'Available on App Store',
    'footer.mobile.android': 'Get it on Google Play',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}