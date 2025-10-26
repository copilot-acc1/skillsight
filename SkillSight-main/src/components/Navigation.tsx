import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = isHome ? [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ] : [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-tight">
            <span className="text-gradient">SkillSight</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href!.slice(1))}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to!}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm glass md:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end mb-8"
                aria-label="Close menu"
              >
                <X size={24} weight="light" />
              </button>
              <div className="flex flex-col gap-6">
                {isHome ? (
                  <>
                    {navLinks.map((link) => (
                      <button
                        key={link.label}
                        onClick={() => scrollToSection(link.href!.slice(1))}
                        className="text-left text-lg opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </button>
                    ))}
                  </>
                ) : (
                  <>
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to!}
                        onClick={() => setIsOpen(false)}
                        className="text-lg opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
