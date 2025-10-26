import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How accurate are SkillSight\'s job market predictions?',
    answer:
      'Our AI models are trained on millions of job postings, industry trends, and economic indicators. We achieve 85%+ accuracy in predicting emerging roles and skill demands 6-12 months ahead.',
  },
  {
    question: 'Is my data secure with SkillSight?',
    answer:
      'Absolutely. We use bank-level encryption for all data storage and transmission. Your information is never sold to third parties, and you have complete control over what data you share.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
  },
  {
    question: 'How does the AI career coach work?',
    answer:
      'Your AI coach analyzes your profile, goals, and the current job market to provide personalized recommendations. It learns from your progress and adapts its guidance over time.',
  },
  {
    question: 'Do you offer student or educational discounts?',
    answer:
      'Yes! Students and educators get 50% off Pro plans. Contact our support team with your .edu email address to receive your discount code.',
  },
  {
    question: 'What makes SkillSight different from other career platforms?',
    answer:
      'Unlike static career advice, SkillSight uses real-time AI predictions and adapts to market changes. Our roadmaps are dynamic and personalized to your unique skills and goals.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg">Everything you need to know about SkillSight</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-light">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base pb-6 opacity-70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
