import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">OUR STORY</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Breaking conventions and pushing boundaries since the digital dawn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-400 mb-4">
              We&apos;re a collective of digital craftsmen who believe in pushing the boundaries of what&apos;s possible on the web. Our team combines technical expertise with creative innovation to deliver exceptional digital experiences.
            </p>
            <p className="text-gray-400">
              Founded in 2020, we&apos;ve grown from a small startup to a dynamic digital agency, serving clients worldwide and transforming their digital presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code2, label: 'Projects Completed', value: '100+' },
              { icon: Users, label: 'Team Members', value: '25+' },
              { icon: Rocket, label: 'Clients Worldwide', value: '50+' },
              { icon: Award, label: 'Awards Won', value: '15+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-darker rounded-lg border border-accent/20">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible, always seeking new solutions."
              },
              {
                title: "Quality Obsessed",
                description: "Every line of code, every pixel, every interaction matters to us."
              },
              {
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering results."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="guitar-card"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 font-mono">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            We&apos;re always looking for talented individuals who share our passion for digital excellence.
          </p>
          <a href="/careers" className="btn-backstage">
            <span>View Careers</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}