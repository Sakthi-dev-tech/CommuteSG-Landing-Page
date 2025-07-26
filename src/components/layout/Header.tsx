import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionNavigation = (sectionId: string) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If already on homepage, just scroll
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/images/app_icon_no_bg.png"
                alt="CommuteSG"
                className="h-12 w-12 mr-2"
              />
              <span className="text-2xl font-bold text-primary">CommuteSG</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center space-x-8">
            <Link
              to="/"
              onClick={() => handleSectionNavigation("hero")}
              className="inline-flex items-center px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-600 hover:text-gray-900 hover:border-primary transition-colors"
            >
              Home
            </Link>

            <button
              onClick={() => handleSectionNavigation("features")}
              className="inline-flex items-center px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-600 hover:text-gray-900 hover:border-primary transition-colors"
            >
              Features
            </button>

            <button
              onClick={() => handleSectionNavigation("support")}
              className="inline-flex items-center px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-600 hover:text-gray-900 hover:border-primary transition-colors"
            >
              Support
            </button>

            <Link
              to="/privacy"
              className="inline-flex items-center px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-600 hover:text-gray-900 hover:border-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Download button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.adormantsakthi.commuteSG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors shadow-md px-6 py-2"
            >
              Download Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-t`}
      >
        <div className="py-4 space-y-2">
          <Link
            to="/"
            className="block px-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <button
            onClick={() => {
              handleSectionNavigation("features");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => {
              handleSectionNavigation("support");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors"
          >
            Support
          </button>
          <Link
            to="/privacy"
            className="block px-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
            <div className="px-4 py-3">
            <button
              onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.adormantsakthi.commuteSG",
                "_blank",
                "noopener,noreferrer"
              );
              setIsMenuOpen(false);
              }}
              className="w-full bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-light transition-colors shadow-md"
            >
              Download Now
            </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
