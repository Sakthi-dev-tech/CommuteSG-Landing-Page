import { motion } from 'framer-motion';
import { AndroidMockup } from 'react-device-mockup';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Navigate<br />
              <span className="text-primary">Singapore's Bus</span><br />
              <span className="text-gray-700">Network with Ease</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Get real-time bus arrival times, find nearby stops, and plan your journey effortlessly with CommuteSG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors shadow-lg">
                Download Now
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 scale-110"></div>
              <AndroidMockup screenWidth={260}>
                <div className="bg-gradient-to-b from-blue-50 to-purple-50 h-full flex flex-col">
                  {/* App mockup content */}
                  <div className="bg-primary text-white p-4 rounded-t-lg">
                    <h3 className="text-lg font-semibold">CommuteSG</h3>
                    <p className="text-sm opacity-90">Your journey companion</p>
                  </div>
                  <div className="flex-1 p-4 space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">🚌</span>
                        </div>
                        <div>
                          <p className="font-semibold">Next Bus</p>
                          <p className="text-sm text-gray-600">Arriving in 3 min</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">📍</span>
                        </div>
                        <div>
                          <p className="font-semibold">Nearby Stops</p>
                          <p className="text-sm text-gray-600">5 stops found</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AndroidMockup>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
