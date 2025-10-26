import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import FeaturedIn from '@/components/home/FeaturedIn';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Mission from '@/components/home/Mission';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Navigation />
      <Hero />
      <FeaturedIn />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </motion.div>
  );
};

export default Index;
