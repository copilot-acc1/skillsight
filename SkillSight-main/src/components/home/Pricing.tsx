import { motion } from 'framer-motion';
import { Check } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for exploring SkillSight',
    features: [
      'Basic job market insights',
      'Limited career roadmap',
      'Community support',
      '1 skill assessment per month',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious career builders',
    recommended: true,
    features: [
      'Advanced market predictions',
      'Unlimited personalized roadmaps',
      'Priority AI coaching',
      'Unlimited skill assessments',
      'Weekly trend reports',
      'Portfolio optimization',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team analytics dashboard',
      'Custom integrations',
      'Dedicated account manager',
      'White-label options',
      'Advanced API access',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Choose the plan that fits your career ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl p-8 relative ${
                plan.recommended ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                  Recommended
                </Badge>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-sm opacity-50 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-light tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm opacity-50">{plan.period}</span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} weight="bold" className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.recommended ? 'neumorphic' : 'outline'}
                className="w-full"
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
