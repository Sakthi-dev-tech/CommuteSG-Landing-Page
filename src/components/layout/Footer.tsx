import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="text-xl font-bold text-primary">CommuteSG</Link>
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
              <button className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md">
                Get it on Google Play
              </button>
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