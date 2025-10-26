import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Lightbulb } from 'phosphor-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Data-driven insights backed by cutting-edge AI research and real-time market analysis.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making professional career guidance available to everyone, regardless of background.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our AI models to stay ahead of market trends and opportunities.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              About <span className="text-gradient">SkillSight</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              We're on a mission to democratize AI-powered career guidance and help professionals
              navigate the evolving job market with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-3xl p-12 mb-16"
          >
            <h2 className="text-3xl mb-6 tracking-tight">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              SkillSight was founded in 2023 by a team of data scientists, career coaches, and AI
              researchers who witnessed countless talented professionals struggle to navigate career
              transitions in an increasingly complex job market.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Traditional career advice couldn't keep pace with rapid technological change and
              shifting industry demands. We knew there had to be a better way—one that leveraged
              artificial intelligence to provide personalized, data-driven career guidance at scale.
            </p>
            <p className="text-lg leading-relaxed">
              Today, SkillSight serves thousands of professionals across industries, helping them
              make informed career decisions backed by real-time market intelligence and predictive
              analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl mb-12 tracking-tight text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="glass rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                      <Icon size={32} weight="light" className="text-white" />
                    </div>
                    <h3 className="text-2xl mb-4 tracking-tight">{value.title}</h3>
                    <p className="leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
