import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darker py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-mono text-accent mb-4 block">Infiniah</Link>
            <p className="text-gray-400 font-mono">
              Breaking conventions.<br />Building futures.
            </p>
          </div>
          <div>
            <h4 className="font-mono mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li><Link to="/services/ios" className="hover:text-accent transition-colors">iOS Development</Link></li>
              <li><Link to="/services/android" className="hover:text-accent transition-colors">Android Development</Link></li>
              <li><Link to="/services/flutter" className="hover:text-accent transition-colors">Flutter Development</Link></li>
              <li><Link to="/services/web" className="hover:text-accent transition-colors">Web Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono mb-4 text-accent">Social</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-mono">
          <p>© {new Date().getFullYear()} Infiniah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}