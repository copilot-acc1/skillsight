import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendarBlank, Clock } from 'phosphor-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Career Development',
    excerpt:
      'Explore how artificial intelligence is revolutionizing career planning and job market predictions for professionals worldwide.',
    date: 'November 15, 2024',
    readTime: '8 min read',
    slug: 'future-of-ai-career-development',
  },
  {
    id: 2,
    title: '5 Skills That Will Define the 2025 Job Market',
    excerpt:
      'Based on our AI analysis of millions of job postings, these are the skills that will be in highest demand next year.',
    date: 'November 10, 2024',
    readTime: '6 min read',
    slug: 'skills-2025-job-market',
  },
  {
    id: 3,
    title: 'How to Build a Career Roadmap That Actually Works',
    excerpt:
      'A step-by-step guide to creating a dynamic career plan that adapts to your goals and market changes.',
    date: 'November 5, 2024',
    readTime: '10 min read',
    slug: 'build-career-roadmap',
  },
  {
    id: 4,
    title: 'Navigating Career Transitions in Your 30s',
    excerpt:
      'Expert insights on successfully changing careers mid-life, backed by data from thousands of successful transitions.',
    date: 'October 28, 2024',
    readTime: '7 min read',
    slug: 'career-transitions-30s',
  },
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              Career Insights <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Expert advice, market insights, and career strategies powered by AI research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block glass rounded-2xl p-8 hover:scale-105 transition-transform h-full"
                >
                  <div className="flex items-center gap-4 text-sm mb-4 opacity-50">
                    <div className="flex items-center gap-2">
                      <CalendarBlank size={16} weight="light" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} weight="light" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl mb-4 tracking-tight hover:text-gradient transition-all">
                    {post.title}
                  </h2>
                  <p className="leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blog;
