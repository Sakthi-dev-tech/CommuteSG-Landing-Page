import { motion } from "framer-motion";
import { AndroidMockup } from "react-device-mockup";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-screen flex items-center justify-center"
    >
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
              Navigate
              <br />
              <span className="text-primary">Singapore's Bus</span>
              <br />
              <span className="text-gray-700">Network with Ease</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Get real-time bus arrival times, find nearby stops, and plan your
              journey effortlessly with CommuteSG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                href="https://play.google.com/store/apps/details?id=com.adormantsakthi.commuteSG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                >
                <img
                  src="/images/download_now_button.png"
                  alt="Get it on Google Play"
                  className="h-auto w-48"
                  style={{ display: "flex" }}
                />
                </a>
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                <AndroidMockup screenWidth={260} statusbarColor="#1a1a19" transparentCamArea transparentNavBar>
                <img
                  src="/images/app-screenshots/nearby_bus_stop_screen.jpg"
                  alt="Nearby Bus Stops App Screenshot"
                  className="w-full h-full object-cover rounded-b-lg"
                  style={{ display: "block" }}
                />
                </AndroidMockup>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
