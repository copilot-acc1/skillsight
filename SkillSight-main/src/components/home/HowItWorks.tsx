import { motion } from 'framer-motion';
import icon1 from '@/assets/icon1.png';
import icon2 from '@/assets/icon2.png';
import icon3 from '@/assets/icon3.png';

const steps = [
  {
    number: '01',
    title: 'Connect Your Profile',
    description:
      'Securely link your LinkedIn, resume, and professional profiles to build your career foundation.',
    image: icon1,
  },
  {
    number: '02',
    title: 'Set Up Your AI Assistant',
    description:
      'Customize your AI career coach with your goals, preferences, and aspirations for personalized guidance.',
    image: icon2,
  },
  {
    number: '03',
    title: 'Get Personalized Career Roadmap',
    description:
      'Receive a dynamic, AI-powered roadmap with skill recommendations and job market predictions tailored to you.',
    image: icon3,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Three simple steps to transform your career trajectory with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <div className="mb-6 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="text-6xl font-light text-primary mb-4 opacity-30">
                {step.number}
              </div>
              <h3 className="text-2xl mb-4 tracking-tight">{step.title}</h3>
              <p className="leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
