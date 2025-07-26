import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="flex items-center space-x-3 relative">
              <span className="absolute -inset-2 rounded-full bg-primary/30 blur-xl z-0"></span>
              <img
          src={('/images/app_icon_no_bg.png')}
          alt="CommuteSG Logo"
          className="h-12 w-12 relative z-10"
              />
              <span className="text-xl font-bold text-primary relative z-10">CommuteSG</span>
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Your essential companion for navigating Singapore's public transport system with ease.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
              </li>
              <li>
          <a href="#support" className="text-gray-300 hover:text-white transition-colors">
            Support
          </a>
              </li>
              <li>
          <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
              </li>
            </ul>
          </div>
          
          {/* Download section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Download</h3>
            <div className="mt-4">
              <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer">
          <img
            src={('/images/download_now_button.png')}
            alt="Get it on Google Play"
            className="h-12"
          />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} CommuteSG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;