import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-8 tracking-tight">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl leading-relaxed mb-6">
            We believe everyone deserves access to intelligent career guidance. In a rapidly
            changing job market, traditional career advice falls short.
          </p>
          <p className="text-xl leading-relaxed">
            That's why we built SkillSight—to democratize AI-powered career insights and help
            people navigate their professional journey with confidence, clarity, and data-driven
            precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
