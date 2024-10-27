import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Sonic Dashboard",
      description: "Real-time analytics platform with dynamic visualizations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "D3.js"],
      link: "/portfolio/sonic-dashboard"
    },
    {
      title: "Amplify Commerce",
      description: "Next-gen e-commerce platform with headless architecture",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "GraphQL", "Stripe"],
      link: "/portfolio/amplify-commerce"
    },
    {
      title: "Echo System",
      description: "Cloud-native communication platform for remote teams",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "WebRTC", "Firebase"],
      link: "/portfolio/echo-system"
    },
    {
      title: "Quantum Analytics",
      description: "AI-powered business intelligence platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "TensorFlow", "React"],
      link: "/portfolio/quantum-analytics"
    },
    {
      title: "Verde Marketplace",
      description: "Sustainable products e-commerce platform",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Shopify", "Tailwind"],
      link: "/portfolio/verde-marketplace"
    },
    {
      title: "Pulse Health",
      description: "Telemedicine platform for remote healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Node.js", "WebRTC"],
      link: "/portfolio/pulse-health"
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
          <h1 className="text-5xl font-bold mb-4">OUR WORK</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            A showcase of our finest digital creations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            Let's create something extraordinary together.
          </p>
          <a href="/contact" className="btn-backstage">
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}