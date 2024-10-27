import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Paintbrush, 
  Rocket, 
  Gauge, 
  Shield, 
  Cloud, 
  Smartphone, 
  Megaphone,
  CheckCircle2,
  Apple,
  Android,
  Layers
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js', 'API Development', 'Database Design']
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Rocket,
      title: 'Digital Strategy',
      description: 'Strategic planning for digital transformation.',
      features: ['Market Analysis', 'Technology Planning', 'Growth Strategy', 'Digital Roadmap']
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Speed up your digital presence for better results.',
      features: ['Load Time Optimization', 'SEO', 'Core Web Vitals', 'Analytics']
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Protect your digital assets with robust security.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Authentication']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for modern businesses.',
      features: ['AWS/Azure', 'Cloud Migration', 'DevOps', 'Monitoring']
    }
  ];

  const mobilePackages = {
    ios: [
      {
        name: 'MVP Package',
        price: '$25,000',
        duration: '2-3 months',
        features: [
          'Core Feature Implementation',
          'Basic UI/UX Design',
          'iOS App Store Submission',
          'Essential Analytics',
          '3 Months Support'
        ]
      },
      {
        name: 'Professional',
        price: '$45,000',
        duration: '3-4 months',
        features: [
          'Advanced Features',
          'Premium UI/UX Design',
          'Push Notifications',
          'Social Integration',
          'API Development',
          '6 Months Support'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        duration: '4-6 months',
        features: [
          'Complex Architecture',
          'Custom Animations',
          'Advanced Security',
          'Multiple API Integrations',
          'Scalable Infrastructure',
          '12 Months Support'
        ]
      }
    ],
    android: [
      {
        name: 'MVP Package',
        price: '$20,000',
        duration: '2-3 months',
        features: [
          'Core Feature Implementation',
          'Material Design UI',
          'Play Store Submission',
          'Basic Analytics',
          '3 Months Support'
        ]
      },
      {
        name: 'Professional',
        price: '$40,000',
        duration: '3-4 months',
        features: [
          'Advanced Features',
          'Custom UI Components',
          'Push Notifications',
          'Social Integration',
          'API Development',
          '6 Months Support'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        duration: '4-6 months',
        features: [
          'Complex Architecture',
          'Custom Animations',
          'Advanced Security',
          'Multiple API Integrations',
          'Scalable Infrastructure',
          '12 Months Support'
        ]
      }
    ],
    flutter: [
      {
        name: 'MVP Package',
        price: '$30,000',
        duration: '2-3 months',
        features: [
          'Cross-platform Development',
          'Modern UI Design',
          'App Store Submissions',
          'Basic Analytics',
          '3 Months Support'
        ]
      },
      {
        name: 'Professional',
        price: '$50,000',
        duration: '3-4 months',
        features: [
          'Advanced Features',
          'Custom Animations',
          'Push Notifications',
          'Social Integration',
          'API Development',
          '6 Months Support'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        duration: '4-6 months',
        features: [
          'Complex Architecture',
          'Advanced Animations',
          'Advanced Security',
          'Multiple API Integrations',
          'Scalable Infrastructure',
          '12 Months Support'
        ]
      }
    ]
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">OUR SERVICES</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Comprehensive digital solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="guitar-card group"
            >
              <service.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 font-mono">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm text-gray-400 font-mono flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16">MOBILE DEVELOPMENT</h2>
          
          {/* iOS Development */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <Apple className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">iOS Development</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {mobilePackages.ios.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="guitar-card relative group"
                >
                  <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-2xl font-bold text-accent mb-2">{pkg.price}</div>
                  <p className="text-gray-400 font-mono text-sm mb-4">{pkg.duration}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-400 font-mono text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="/contact" className="btn-backstage w-full">
                      <span>Get Started</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Android Development */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <Android className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Android Development</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {mobilePackages.android.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="guitar-card relative group"
                >
                  <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-2xl font-bold text-accent mb-2">{pkg.price}</div>
                  <p className="text-gray-400 font-mono text-sm mb-4">{pkg.duration}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-400 font-mono text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="/contact" className="btn-backstage w-full">
                      <span>Get Started</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flutter Development */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Layers className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Flutter Development</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {mobilePackages.flutter.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="guitar-card relative group"
                >
                  <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-2xl font-bold text-accent mb-2">{pkg.price}</div>
                  <p className="text-gray-400 font-mono text-sm mb-4">{pkg.duration}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-400 font-mono text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="/contact" className="btn-backstage w-full">
                      <span>Get Started</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <a href="/contact" className="btn-backstage">
            <span>Get Started</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}