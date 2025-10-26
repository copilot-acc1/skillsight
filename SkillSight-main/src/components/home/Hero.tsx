import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import mockup from '@/assets/mockup.jpg';
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Spline Background */}
       <div className="absolute -top-[25rem] sm:-top-[28rem] md:-top-[35rem] left-1/2 -translate-x-1/2 -translate-y-0 w-[280%] sm:w-[350%] md:w-[500%] h-[140vh] sm:h-[200vh] md:h-[250vh] z-0 pointer-events-none flex items-center justify-center">
  <iframe 
    src='https://my.spline.design/particleaibrain-VtZB3OHjnOVBcqp8vfhjoxTw/' 
    frameBorder='0' 
    width='100%' 
    height='100%'
    className="w-full h-full scale-110 sm:scale-115 md:scale-125"
    style={{ pointerEvents: 'none' }}
  />
  <style dangerouslySetInnerHTML={{__html: `
    iframe[src*="spline.design"] {
      pointer-events: none !important;
    }
  `}} />
</div>


      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <h1 className="text-4xl md:text-6xl mb-6 tracking-tighter text-center mx-[15px] px-[23px] my-[19px] py-0 lg:text-5xl">
            Transform Your Career with{' '}
            <span className="text-gradient">AI-Powered Insights</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-60">
            SkillSight predicts job market trends and creates personalized career roadmaps
            tailored to your unique skills and aspirations.
          </p>
          <Button variant="glassmorphic" size="lg" className="text-base">
            Get Started
          </Button>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="mt-20 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden glass p-2 max-w-4xl">
            <img src={mockup} alt="SkillSight Dashboard Interface" className="w-full h-auto rounded-xl" />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;
