import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react';

const Contact = () => {
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 opacity-70">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="glass border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 opacity-70">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="glass border-border"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 opacity-70">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="glass border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 opacity-70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="glass border-border resize-none"
                  />
                </div>
                <Button variant="neumorphic" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl mb-6 tracking-tight">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <EnvelopeSimple size={24} weight="light" className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1 opacity-90">Email</p>
                      <p className="opacity-70">hello@skillsight.ai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Phone size={24} weight="light" className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1 opacity-90">Phone</p>
                      <p className="opacity-70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} weight="light" className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1 opacity-90">Office</p>
                      <p className="opacity-70">
                        123 Innovation Drive
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl mb-4 tracking-tight">Office Hours</h3>
                <div className="space-y-2 opacity-70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
