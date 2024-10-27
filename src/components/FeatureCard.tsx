import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-colors duration-300" />
      <div className="relative p-6 bg-darker rounded-lg border border-accent/10 group-hover:border-accent/30 transition-colors duration-300">
        <div className="w-12 h-12 mb-4 text-accent p-2 bg-accent/10 rounded-lg">
          <Icon className="w-full h-full" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400 font-mono text-sm">{description}</p>
      </div>
    </div>
  );
}