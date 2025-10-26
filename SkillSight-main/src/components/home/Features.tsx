import { motion } from 'framer-motion';
import {
  ChartLine,
  Brain,
  Path,
  Sparkle,
} from 'phosphor-react';

const features = [
  {
    icon: ChartLine,
    title: 'Job Market Predictions',
    description:
      'AI-powered forecasts of emerging roles, skill demands, and industry trends to stay ahead of the curve.',
  },
  {
    icon: Brain,
    title: 'Personalized AI Coach',
    description:
      'Your dedicated AI assistant that learns your goals and provides tailored career guidance 24/7.',
  },
  {
    icon: Path,
    title: 'Dynamic Career Roadmaps',
    description:
      'Adaptive pathways that evolve with your progress and market changes, keeping you on track.',
  },
  {
    icon: Sparkle,
    title: 'Skill Gap Analysis',
    description:
      'Identify exactly what skills you need to acquire to reach your next career milestone.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Everything you need to take control of your career trajectory
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon size={24} weight="light" className="text-white" />
                </div>
                <h3 className="text-2xl mb-4 tracking-tight">{feature.title}</h3>
                <p className="leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
