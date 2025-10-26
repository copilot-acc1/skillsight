import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendarBlank, Clock, ArrowLeft } from 'phosphor-react';

const blogContent: Record<string, any> = {
  'future-of-ai-career-development': {
    title: 'The Future of AI in Career Development',
    date: 'November 15, 2024',
    readTime: '8 min read',
    content: `
      <p>Artificial intelligence is fundamentally transforming how we approach career development. No longer confined to science fiction, AI-powered career tools are becoming essential for professionals navigating today's rapidly evolving job market.</p>

      <h2>The AI Revolution in Career Planning</h2>
      <p>Traditional career counseling relied on static assessments and human intuition. While valuable, these methods couldn't process the massive amounts of data necessary to predict market trends or personalize recommendations at scale.</p>

      <p>Modern AI systems analyze millions of job postings, industry trends, salary data, and skill requirements in real-time. This enables unprecedented accuracy in predicting which careers are growing, which skills are becoming valuable, and which paths align best with individual profiles.</p>

      <h2>Personalization at Scale</h2>
      <p>What makes AI particularly powerful is its ability to deliver personalized guidance to everyone. Machine learning models can understand your unique combination of skills, experience, and goals, then match them against market opportunities to create truly customized career roadmaps.</p>

      <p>These systems learn and adapt. As you progress in your career and as market conditions change, AI-powered tools continuously refine their recommendations, ensuring you're always working toward relevant, achievable goals.</p>

      <h2>The Human Touch Remains Essential</h2>
      <p>Despite AI's capabilities, human judgment remains crucial. The best career development solutions combine AI's analytical power with human expertise, emotional intelligence, and contextual understanding.</p>

      <p>At SkillSight, we believe AI should augment—not replace—human decision-making in career development. Our platform provides data-driven insights while empowering you to make the final decisions about your professional journey.</p>

      <h2>Looking Ahead</h2>
      <p>As AI technology continues to advance, we'll see even more sophisticated career development tools. Natural language processing will enable more intuitive interactions, while predictive models will become increasingly accurate at forecasting market shifts.</p>

      <p>The future of career development is collaborative: humans and AI working together to navigate an increasingly complex professional landscape. Those who embrace these tools early will have a significant advantage in building resilient, fulfilling careers.</p>
    `,
  },
  'skills-2025-job-market': {
    title: '5 Skills That Will Define the 2025 Job Market',
    date: 'November 10, 2024',
    readTime: '6 min read',
    content: `
      <p>Our AI has analyzed millions of job postings, company reports, and industry forecasts to identify the skills that will be most valuable in 2025. Here's what you need to know to stay competitive.</p>

      <h2>1. AI Literacy</h2>
      <p>Understanding how to work alongside AI tools is no longer optional. From content creators using AI writing assistants to analysts leveraging machine learning models, professionals across all industries need basic AI literacy.</p>

      <p>This doesn't mean everyone needs to become a data scientist. Rather, it's about understanding AI capabilities, limitations, and how to effectively collaborate with AI systems in your specific role.</p>

      <h2>2. Adaptive Problem-Solving</h2>
      <p>As automation handles routine tasks, human workers are increasingly valued for their ability to tackle novel, complex problems. The ability to think critically, adapt quickly, and devise creative solutions is becoming the defining professional skill.</p>

      <h2>3. Cross-Functional Communication</h2>
      <p>Modern projects require collaboration across diverse teams. The ability to communicate effectively with colleagues from different disciplines—translating technical concepts for non-technical audiences and vice versa—is increasingly valuable.</p>

      <h2>4. Emotional Intelligence</h2>
      <p>As AI handles more analytical work, uniquely human skills like empathy, relationship-building, and cultural awareness are becoming more important. Roles requiring high emotional intelligence are among the fastest-growing categories.</p>

      <h2>5. Continuous Learning Agility</h2>
      <p>Perhaps the meta-skill of our era: the ability to quickly learn and apply new skills. Technology and markets evolve rapidly, and professionals who can continuously upskill and reskill will thrive.</p>

      <h2>Preparing for 2025</h2>
      <p>Start developing these skills now. Many are best learned through practice and real-world application rather than traditional courses. Look for opportunities to work on cross-functional projects, experiment with AI tools, and challenge yourself with unfamiliar problems.</p>

      <p>The professionals who succeed in 2025 won't necessarily be those with the most technical expertise, but those who combine technical competence with these essential human skills.</p>
    `,
  },
  'build-career-roadmap': {
    title: 'How to Build a Career Roadmap That Actually Works',
    date: 'November 5, 2024',
    readTime: '10 min read',
    content: `
      <p>Most career plans fail not because they're poorly conceived, but because they're too rigid. A truly effective career roadmap must be dynamic, adapting to both your growth and market changes.</p>

      <h2>Start with Honest Self-Assessment</h2>
      <p>Before planning where you're going, understand where you are. Conduct a thorough inventory of your current skills, experiences, strengths, and areas for growth. Be honest about what energizes you and what drains you.</p>

      <p>Tools like SkillSight can help by providing objective analysis of your professional profile and comparing it against market demands.</p>

      <h2>Define Multiple Horizons</h2>
      <p>Instead of a single five-year goal, establish objectives at different time horizons:</p>
      <ul>
        <li><strong>Immediate (3-6 months):</strong> Specific skills to learn or projects to complete</li>
        <li><strong>Near-term (1-2 years):</strong> Role transitions or major skill developments</li>
        <li><strong>Long-term (3-5 years):</strong> Career milestones and professional identity</li>
      </ul>

      <h2>Make It Action-Oriented</h2>
      <p>Vague aspirations like "become a better leader" are difficult to achieve. Instead, break down each goal into concrete, measurable actions. "Complete a leadership certification and lead two cross-functional projects" is actionable.</p>

      <h2>Build in Flexibility</h2>
      <p>Your roadmap should have waypoints, not a fixed destination. Industry landscapes shift, new opportunities emerge, and your interests may evolve. Review and adjust your roadmap quarterly.</p>

      <h2>Create Accountability Systems</h2>
      <p>Share your goals with mentors, join peer groups, or use tools that track your progress. Regular check-ins help maintain momentum and provide opportunities to course-correct.</p>

      <h2>Align with Market Reality</h2>
      <p>Ambition must be tempered with market awareness. Research which roles are growing, which skills are in demand, and which industries are expanding. AI-powered platforms can provide real-time market intelligence to inform your planning.</p>

      <h2>The Power of Adjacent Skills</h2>
      <p>Don't just deepen existing expertise—develop adjacent skills that complement your core competencies. A developer who understands UX design, or a marketer who can analyze data, becomes significantly more valuable.</p>

      <h2>Continuous Iteration</h2>
      <p>Your career roadmap is never "done." As you achieve milestones, set new ones. As markets shift, adjust your path. The professionals who thrive are those who treat career planning as an ongoing practice, not a one-time exercise.</p>
    `,
  },
  'career-transitions-30s': {
    title: 'Navigating Career Transitions in Your 30s',
    date: 'October 28, 2024',
    readTime: '7 min read',
    content: `
      <p>Your 30s are a pivotal decade for career development. You've accumulated experience but still have decades ahead to build something new. Yet career transitions at this stage come with unique challenges—and tremendous opportunities.</p>

      <h2>Why Career Changes Feel Different in Your 30s</h2>
      <p>Unlike your 20s, when experimentation was expected, your 30s often bring increased financial responsibilities, family considerations, and the weight of established professional identity. The stakes feel higher, which can make change more daunting.</p>

      <p>However, this decade also offers advantages: you have a clearer sense of what you value, stronger professional networks, and proven abilities. You're not starting from zero—you're pivoting from a foundation.</p>

      <h2>Leverage Transferable Skills</h2>
      <p>Our analysis of successful career transitions shows that people in their 30s succeed by identifying and articulating how their existing skills apply to new contexts. A project manager has skills relevant to product management, operations, and consulting.</p>

      <p>Create a comprehensive inventory of your transferable skills—not just technical abilities, but soft skills, industry knowledge, and professional competencies.</p>

      <h2>Strategic Skill Acquisition</h2>
      <p>You likely can't afford to take years off for full retraining. Instead, be strategic about skill development:</p>
      <ul>
        <li>Focus on high-impact skills that create the most optionality</li>
        <li>Use evening courses, online programs, or side projects for learning</li>
        <li>Seek stretch assignments in your current role that build relevant experience</li>
      </ul>

      <h2>Financial Planning for Transitions</h2>
      <p>Career changes often involve financial trade-offs. You might take a temporary pay cut or invest in education. Plan accordingly:</p>
      <ul>
        <li>Build an emergency fund before making moves</li>
        <li>Calculate your minimum acceptable salary</li>
        <li>Consider gradual transitions or side hustles to test new paths</li>
      </ul>

      <h2>Network Strategically</h2>
      <p>Your professional network is one of your greatest assets. Reach out to people in your target industry or role. Most professionals are willing to have informational conversations—these can provide invaluable insights and potentially lead to opportunities.</p>

      <h2>Address Age Bias Head-On</h2>
      <p>Some industries or roles may perceive career changers in their 30s as either overqualified or lacking relevant experience. Address this by clearly articulating your motivation for the change and demonstrating genuine commitment through relevant projects or certifications.</p>

      <h2>The Data on Career Transitions</h2>
      <p>Our analysis of thousands of career transitions reveals that successful changers in their 30s typically:</p>
      <ul>
        <li>Spend 6-18 months preparing before making the leap</li>
        <li>Target roles that leverage at least 60% of their existing skills</li>
        <li>Actively work with mentors or coaches during the transition</li>
        <li>Start with lateral or slightly junior moves, advancing rapidly once established</li>
      </ul>

      <h2>Your 30s: The Decade of Intentional Growth</h2>
      <p>Rather than viewing your 30s as a constraint, see them as an opportunity for intentional career design. You have enough experience to know what you want and enough time to achieve it. With proper planning and execution, this decade can set the trajectory for a fulfilling professional life.</p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen"
      >
        <Navigation />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Return to blog
          </Link>
        </div>
        <Footer />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Navigation />
      <article className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-8"
            >
              <ArrowLeft size={16} weight="light" />
              Back to blog
            </Link>

            <h1 className="text-4xl md:text-6xl mb-6 tracking-tight">{post.title}</h1>

            <div className="flex items-center gap-6 text-sm mb-12 opacity-50">
              <div className="flex items-center gap-2">
                <CalendarBlank size={16} weight="light" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} weight="light" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </motion.div>
        </div>
      </article>
      <Footer />

      <style>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 300;
          letter-spacing: -0.025em;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
        }
        .prose strong {
          font-weight: 500;
        }
      `}</style>
    </motion.div>
  );
};

export default BlogPost;
