import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Clock, Users } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "We're looking for an experienced frontend developer to join our team and help build amazing user experiences."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Join our design team to create beautiful and intuitive interfaces for our clients."
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $160k",
      description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "We offer top-market compensation packages"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented professionals"
    },
    {
      icon: MapPin,
      title: "Remote First",
      description: "Work from anywhere in the world"
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
          <h1 className="text-5xl font-bold mb-4">JOIN OUR TEAM</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Build the future of digital experiences with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="guitar-card"
            >
              <benefit.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 font-mono">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="guitar-card"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <p className="text-gray-400 font-mono">{position.department}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-mono">{position.salary}</span>
                    <p className="text-gray-400 font-mono text-sm">{position.type}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 font-mono">{position.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <button className="btn-backstage">
                    <span>Apply Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}