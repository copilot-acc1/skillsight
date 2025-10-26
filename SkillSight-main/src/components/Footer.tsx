import { Link } from 'react-router-dom';
import { LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light tracking-tight mb-4 text-gradient">
              SkillSight
            </h3>
            <p className="text-sm leading-relaxed">
              AI-powered career insights for the modern professional.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 opacity-90">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 opacity-90">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="opacity-60 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-60 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 opacity-90">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={24} weight="light" />
              </a>
              <a
                href="#"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <TwitterLogo size={24} weight="light" />
              </a>
              <a
                href="#"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <GithubLogo size={24} weight="light" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm opacity-50">
          <p>&copy; {new Date().getFullYear()} SkillSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
