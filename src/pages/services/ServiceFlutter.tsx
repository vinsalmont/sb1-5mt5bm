import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, Smartphone, Zap, Globe, Cloud } from 'lucide-react';

export default function ServiceFlutter() {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "One codebase for iOS and Android apps"
    },
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid development with hot reload"
    },
    {
      icon: Globe,
      title: "Native Performance",
      description: "Near-native performance on all platforms"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services"
    }
  ];

  const packages = [
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
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Layers className="w-12 h-12 text-accent" />
            <h1 className="text-5xl font-bold">FLUTTER DEVELOPMENT</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="guitar-card group"
            >
              <feature.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 font-mono">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Cross-Platform App?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            Let's create a beautiful Flutter application that works everywhere.
          </p>
          <a href="/contact" className="btn-backstage">
            <span>Start Your Project</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}