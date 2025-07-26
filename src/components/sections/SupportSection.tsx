import { motion } from 'framer-motion';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

const SupportSection = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Support</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We value your feedback and suggestions. If you have any questions or comments, please reach out to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h3>
            <p className="text-gray-600 mb-6">
              Send us your questions and I will respond within 24 hours.
            </p>
            <a
              href="mailto:adormantsakthi@gmail.com"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Send Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Suggestions and Feedback</h3>
            <p className="text-gray-600 mb-6">
              Contribute to suggestions and feedback for the app.
            </p>
            <button className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md">
              Give Feedback
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <p className="text-gray-600 mb-6">
              Find answers to commonly asked questions about CommuteSG.
            </p>
            <button className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors shadow-md">
              View FAQ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
