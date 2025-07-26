import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail, MessageCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Scroll to top smoothly when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    // General App Usage
    {
      id: 'general-1',
      category: 'general',
      question: 'What is CommuteSG and how does it work?',
      answer: 'CommuteSG is a comprehensive public transport app for Singapore that provides real-time bus arrival times, nearby bus stop locations, interactive maps, and route planning. The app uses official LTA (Land Transport Authority) data to ensure accurate and up-to-date information for your daily commute.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Is CommuteSG free to use?',
      answer: 'Yes, CommuteSG is completely free to download and use. However, there is a subscription option for premium features like home widget access and alert for when you are arriving at your destination bus stop. This is so that users who need these features can support the development of the app and help me offload the server costs. However, I strive to give the best value for the money paid. The basic features remain free for all users.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'Which devices support CommuteSG?',
      answer: 'CommuteSG is available for Android devices and can be downloaded from the Google Play Store. The app is compatible with Android 5.0 (API level 24) and above. An iOS version will be released if it is possible for me.'
    },
    {
      id: 'general-4',
      category: 'general',
      question: 'Do I need an internet connection to use the app?',
      answer: 'Yes, an active internet connection (Wi-Fi or mobile data) is required to access real-time bus arrival information, as this data is fetched from LTA servers. However, some features like viewing saved favourites may work with limited offline functionality.'
    },
    {
        id: 'general-5',
        category: 'general',
        question: "If I purchase the subscription, will I be charged again if I reinstall the app?",
        answer: "No, if you purchase the subscription, you will not be charged again if you reinstall the app. Your subscription is tied to your Google Play account, so as long as you use the same account, your subscription will remain active. You can restore your purchase in the app settings if needed."
    },

    // Real-time Bus Arrivals
    {
      id: 'timing-1',
      category: 'timing',
      question: 'How accurate are the real-time bus arrival times?',
      answer: 'The real-time bus arrival times are provided directly by Singapore\'s Land Transport Authority (LTA) and are generally accurate within 1-2 minutes. However, accuracy can be affected by traffic conditions, weather, and other unforeseen circumstances beyond our control.'
    },
    {
      id: 'timing-2',
      category: 'timing',
      question: 'Why do the bus arrival times sometimes show "Now" instead of minutes?',
      answer: '"Now" means the bus is arriving at the bus stop within the next minute. This is the standard notation used by LTA when a bus is very close to or at the bus stop.'
    },
    {
      id: 'timing-3',
      category: 'timing',
      question: 'Do the arrival times update automatically?',
      answer: 'The app displays real-time data, but you may need to manually refresh by pulling down on the screen to get the latest arrival times as I do not want to drain your battery and also to limit the number of requests made to LTA for the timings. We recommend refreshing the information every few minutes for the most accurate timing.'
    },
    {
      id: 'timing-4',
      category: 'timing',
      question: 'Why are some buses showing "No Estimated Time"?',
      answer: 'This typically happens when buses are not currently running (outside operating hours), during service disruptions, or when there are technical issues with the bus tracking system. Check if the bus service is operating or try again later.'
    },

    // Location and GPS
    {
      id: 'location-1',
      category: 'location',
      question: 'Why can\'t the app find nearby bus stops?',
      answer: 'This feature requires location permissions to be enabled for CommuteSG. Please check your device settings and ensure that location services are turned on and the app has permission to access your location. If the issue persists, try using the search function to find specific bus stops manually.'
    },
    {
      id: 'location-2',
      category: 'location',
      question: 'How does the app determine my location?',
      answer: 'CommuteSG uses your device\'s built-in GPS, Wi-Fi, and mobile network location services to determine your position. For the most accurate results, ensure GPS is enabled and you\'re in an area with good signal reception.'
    },
    {
      id: 'location-3',
      category: 'location',
      question: 'Can I use the app without sharing my location?',
      answer: 'Yes, you can still use most features of CommuteSG without location access. You can manually search for bus stops by name or bus stop code, save favorite locations, and view arrival times. However, the "nearby stops" feature will not be available.'
    },

    // Features and Functions
    {
      id: 'features-1',
      category: 'features',
      question: 'How do I save a bus stop to my favorites?',
      answer: 'To save a bus stop to favorites, navigate to the bus stop page and tap the heart icon. Your favourite stops will be easily accessible from the favourites section for quick reference during your daily commute.'
    },
    {
      id: 'features-2',
      category: 'features',
      question: 'How do I set up home screen widgets?',
      answer: 'CommuteSG offers Android home screen widgets for quick access to your favorite bus services. Long-press on your home screen, select "Widgets," find CommuteSG widgets, and drag them to your desired location. It will show the timings of your favourited bus services.'
    },
    {
      id: 'features-3',
      category: 'features',
      question: 'Can I get notifications for bus arrivals?',
      answer: 'Yes, CommuteSG supports custom notifications and reminders. You can set alerts for specific bus arrivals and receive notifications when buses are approaching your stop. Configure these in the app\'s notification settings.'
    },
    {
      id: 'features-4',
      category: 'features',
      question: 'How do I use the interactive map feature?',
      answer: 'The interactive map shows all bus stops in Singapore with real-time information. You can zoom in/out, tap on bus stop markers to view details, and use it to plan your route. The map also shows your current location if location services are enabled.'
    },

    // Troubleshooting
    {
      id: 'troubleshooting-1',
      category: 'troubleshooting',
      question: 'The app is loading slowly or not responding. What should I do?',
      answer: 'Try closing and reopening the app. If the problem persists, check your internet connection, restart your device, or ensure you have the latest version of the app installed. You can also try clearing the app cache in your device settings.'
    },
    {
      id: 'troubleshooting-2',
      category: 'troubleshooting',
      question: 'Why is some bus stop information outdated or missing?',
      answer: 'Bus stop and route information is updated regularly from official LTA sources. If you notice outdated information, please contact us through the app\'s feedback feature or email us. We\'ll investigate and update the information as needed.'
    },
    {
      id: 'troubleshooting-3',
      category: 'troubleshooting',
      question: 'The app crashes when I try to open it. How can I fix this?',
      answer: 'First, try restarting your device. If that doesn\'t work, uninstall and reinstall the app from the Google Play Store. Make sure your device has sufficient storage space and meets the minimum system requirements (Android 5.0+).'
    },

    // Privacy and Data
    {
      id: 'privacy-1',
      category: 'privacy',
      question: 'What personal information does CommuteSG collect?',
      answer: 'CommuteSG collects minimal personal information. We access your location only when you grant permission and use it solely to provide nearby bus stop information. We also collect anonymous usage analytics to improve the app. We do not collect personally identifiable information like your name or email address.'
    },
    {
      id: 'privacy-2',
      category: 'privacy',
      question: 'Is my location data stored or shared?',
      answer: 'Your location is used in real-time to show nearby bus stops and is not stored permanently on our servers. We do not share location data with third parties. For complete details, please review our Privacy Policy.'
    },
    {
      id: 'privacy-3',
      category: 'privacy',
      question: 'Can I use the app without creating an account?',
      answer: 'Yes, CommuteSG does not require account creation or user registration. You can use all features of the app without providing any personal information or creating an account.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: '🔍' },
    { id: 'general', label: 'General', icon: '📱' },
    { id: 'timing', label: 'Bus Timings', icon: '⏰' },
    { id: 'location', label: 'Location & GPS', icon: '📍' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: '🔧' },
    { id: 'privacy', label: 'Privacy & Data', icon: '🔒' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-orange to-pastel-pink relative overflow-hidden">
        {/* Additional gradient overlays for enhanced visual effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pastel-green/20 via-transparent to-pastel-yellow/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pastel-orange/10 to-pastel-pink/30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4 py-2">
                  Frequently Asked Questions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/20 via-blue-300/20 to-pink-300/20 blur-xl rounded-lg"></div>
              </div>
              <p className="text-lg bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
                Find answers to common questions about CommuteSG
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white shadow-md transform scale-105'
                        : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-sm'
                    }`}
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/40 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5"
                    >
                      <div className="border-t border-gray-200/50 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Still Have Questions Section */}
            <div className="mt-12 pt-8 border-t border-gray-200/50">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                <p className="text-gray-600">
                  Can't find what you're looking for? We're here to help!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-100/80 to-blue-200/60 p-6 rounded-xl text-center border border-blue-200/50 shadow-md"
                >
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get detailed help via email
                  </p>
                  <a
                    href="mailto:adormantsakthi@gmail.com"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Email
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-green-100/80 to-green-200/60 p-6 rounded-xl text-center border border-green-200/50 shadow-md"
                >
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Share your suggestions with us
                  </p>
                  <button
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    onClick={() => window.open('https://adormantsakthi.canny.io/commutesg-feature-requests', '_blank')}
                  >
                    Give Feedback
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
