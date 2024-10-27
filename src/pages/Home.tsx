import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Music2, 
  Code2, 
  Zap,
  ChevronRight,
  Rocket,
  Shield,
  Cpu,
  Workflow,
  Gauge,
  Users
} from 'lucide-react';
import Equalizer from '../components/Equalizer';
import ProjectCard from '../components/ProjectCard';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
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
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: "Blazing Fast Performance",
      description: "Optimized code that delivers lightning-quick load times"
    },
    {
      icon: Shield,
      title: "Rock-Solid Security",
      description: "Enterprise-grade protection for your digital assets"
    },
    {
      icon: Cpu,
      title: "Smart Architecture",
      description: "Scalable solutions built for future growth"
    },
    {
      icon: Workflow,
      title: "Agile Development",
      description: "Rapid iterations with continuous deployment"
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Real-time monitoring and optimization"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Interfaces that resonate with your audience"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-accent"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random(),
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Equalizer />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
              BREAK THE<br />
              <span className="text-accent">CODE</span> BARRIER
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl font-mono">
              We amplify your digital presence with code that rocks and design that rebels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-backstage">
                <span>Start the Show</span>
              </Link>
              <Link to="/portfolio" className="btn-backstage">
                <span>View Setlist</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
      </header>

      {/* Services Section */}
      <section className="section-diagonal bg-darker" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-accent">{'{'}</span>
              OUR STACK
              <span className="text-accent">{'}'}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
              Where code meets creativity in perfect harmony.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Digital Symphony",
                desc: "Full-stack development that orchestrates perfect user experiences"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Electric Design",
                desc: "UI/UX that amplifies your brand's frequency"
              },
              {
                icon: <Music2 className="w-8 h-8" />,
                title: "Performance Tuning",
                desc: "Optimization that makes your application sing"
              }
            ].map((service, index) => (
              <div key={index} className="guitar-card group">
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 font-mono">{service.desc}</p>
                <Link to="/services" className="text-accent font-mono flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AMPLIFIED FEATURES</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
              Every feature is fine-tuned for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-darker" id="work">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">GREATEST HITS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
              A showcase of our chart-topping projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-backstage">
              <span>View All Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-bright opacity-30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Launched" },
              { number: "50K+", label: "Lines of Code" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            READY TO
            <span className="text-accent"> ROCK</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            Join the revolution of code that breaks all boundaries.
          </p>
          <Link to="/contact" className="btn-backstage">
            <span>Get Backstage Access</span>
          </Link>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
        </div>
      </section>
    </>
  );
}