import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Smartphone, Route, Bell } from 'lucide-react';
import { useState } from 'react';

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Bus Arrival",
      description: "Shows live bus arrival times so you know exactly when to leave.",
      placeholderBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      demoBg: "bg-gradient-to-br from-blue-200 to-blue-300",
      demoContent: "🚌 Bus 174 - 3 min\n🚌 Bus 67 - 7 min\n🚌 Bus 197 - 12 min",
      demoImage: "/images/app-screenshots/arrival_screenshot.jpg"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location-based Services",
      description: "Finds nearby bus stops using your device's GPS.",
      placeholderBg: "bg-gradient-to-br from-green-100 to-green-200",
      demoBg: "bg-gradient-to-br from-green-200 to-green-300",
      demoContent: "📍 Nearest Stops:\n• Orchard Road (50m)\n• Somerset MRT (150m)\n• Plaza Singapura (300m)",
      demoImage: "/images/app-screenshots/nearby_stops.jpg"
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Interactive Map",
      description: "Explore bus stops and routes on a user-friendly Flutter Map.",
      placeholderBg: "bg-gradient-to-br from-orange-100 to-orange-200",
      demoBg: "bg-gradient-to-br from-orange-200 to-orange-300",
      demoContent: "🗺️ Interactive Map\n• View all bus stops\n• Plan your route\n• Real-time locations",
      demoImage: "/images/app-screenshots/map_screen.jpg"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Home Widgets",
      description: "Android home screen widgets for quick access to your favourite stops.",
      placeholderBg: "bg-gradient-to-br from-pink-100 to-pink-200",
      demoBg: "bg-gradient-to-br from-pink-200 to-pink-300",
      demoContent: "📱 Quick Access\n• Home screen widgets\n• Favourite stops\n• One-tap updates",
      demoImage: "/images/app-screenshots/widget.png"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Favourites System",
      description: "Save frequently used bus stops for easy access.",
      placeholderBg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      demoBg: "bg-gradient-to-br from-yellow-200 to-yellow-300",
      demoContent: "⭐ Your Favourites\n• Home (Blk 123)\n• Work (CBD Area)\n• Shopping (Orchard)",
      demoImage: "/images/app-screenshots/favourite_screen.jpg"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Schedules & Notifications",
      description: "Set custom reminders and receive smart alerts when approaching your stop.",
      placeholderBg: "bg-gradient-to-br from-orange-100 to-orange-200",
      demoBg: "bg-gradient-to-br from-orange-200 to-orange-300",
      demoContent: "🔔 Smart Alerts\n• Custom reminders\n• Approach notifications\n• Schedule updates",
      demoImage: "/images/app-screenshots/bus_stop_noti.gif"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a smoother commute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`feature-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden ${
                hoveredFeature === index ? feature.demoBg : feature.placeholderBg
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Default content - icon, title, description */}
              <div
                className={`flex flex-col items-center text-center h-full transition-all duration-500 ${
                  hoveredFeature === index ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <div className="text-gray-700 mb-6 mt-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Demo content that appears on hover */}
              <div
                className={`absolute inset-0 p-6 flex items-center justify-center transition-all duration-500 ${
                  hoveredFeature === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                {feature.demoImage ? (
                  <img 
                    src={feature.demoImage} 
                    alt={`${feature.title} demo`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                  />
                ) : (
                  <div className="text-sm text-gray-700 font-medium whitespace-pre-line text-center">
                    {feature.demoContent}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
