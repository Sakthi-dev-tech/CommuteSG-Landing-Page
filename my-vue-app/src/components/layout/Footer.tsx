import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="text-xl font-bold">CommuteSG</Link>
            <p className="mt-2 text-sm text-gray-300">
              Your essential companion for navigating Singapore's public transport system with ease.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Download section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Download</h3>
            <div className="mt-4">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} CommuteSG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;