import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "The Future of Web Development: What's Next in 2024",
      excerpt: "Exploring upcoming trends and technologies that will shape the web development landscape.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "Alex Chen",
      category: "Technology"
    },
    {
      title: "Optimizing React Applications for Performance",
      excerpt: "Best practices and techniques for building faster React applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      date: "March 12, 2024",
      readTime: "7 min read",
      author: "Sarah Johnson",
      category: "Development"
    },
    {
      title: "The Impact of AI on Modern Web Design",
      excerpt: "How artificial intelligence is revolutionizing the way we design digital experiences.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: "Mike Wilson",
      category: "Design"
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
          <h1 className="text-5xl font-bold mb-4">BLOG</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Insights, tutorials, and updates from our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-darker rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-accent px-2 py-1 bg-accent/10 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-accent transition-colors">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-gray-400 mb-4 font-mono text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="#" className="btn-backstage">
            <span>Load More Posts</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}