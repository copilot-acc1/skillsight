import { motion } from 'framer-motion';
import { Star } from 'phosphor-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import avatar1 from '@/assets/avatar1.jpg';
import avatar2 from '@/assets/avatar2.jpg';
import avatar3 from '@/assets/avatar3.jpg';
import avatar4 from '@/assets/avatar4.jpg';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    result: 'Landed dream job at Google in 3 months',
    quote:
      'SkillSight helped me identify the exact skills I needed to transition into AI engineering. The roadmap was incredibly accurate.',
    avatar: avatar1,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    result: '40% salary increase after career pivot',
    quote:
      'The job market predictions were spot-on. I knew exactly which direction to take my career before the market shifted.',
    avatar: avatar2,
  },
  {
    name: 'Emily Watson',
    role: 'UX Designer',
    result: 'Promoted to Senior Designer in 6 months',
    quote:
      'The personalized skill recommendations were exactly what I needed. Every suggestion was relevant and actionable.',
    avatar: avatar3,
  },
  {
    name: 'David Kim',
    role: 'Data Scientist',
    result: 'Built portfolio that got 5+ job offers',
    quote:
      "SkillSight's AI assistant helped me focus on the right projects. My portfolio now showcases exactly what employers want.",
    avatar: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            Trusted by <span className="text-gradient">Career Builders</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join thousands who've transformed their careers with AI-powered insights
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 h-full"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="mb-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-primary">
                      {testimonial.result}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium opacity-90">{testimonial.name}</p>
                      <p className="text-sm opacity-50">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
