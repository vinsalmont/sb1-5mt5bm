import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-darker">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 font-mono text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs font-mono bg-accent/20 text-accent rounded">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={link}
            className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:text-accent-bright transition-colors"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}