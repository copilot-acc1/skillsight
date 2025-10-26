import { motion } from 'framer-motion';

const logos = [
  { name: 'TechCrunch', opacity: 0.4 },
  { name: 'Forbes', opacity: 0.5 },
  { name: 'Wired', opacity: 0.4 },
  { name: 'The Verge', opacity: 0.5 },
  { name: 'EdTech Magazine', opacity: 0.4 },
  { name: 'Harvard Business Review', opacity: 0.5 },
];

const FeaturedIn = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest mb-12 opacity-40">
            Featured In
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: logo.opacity, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-light text-lg">{logo.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
