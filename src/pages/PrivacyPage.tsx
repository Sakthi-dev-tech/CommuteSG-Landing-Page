import Layout from '../components/layout/Layout';

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="text-gray-600 text-lg">Last updated: 17/07/2025</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-pastel-blue/30 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  CommuteSG ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application (the "App").
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-green/50 p-2 rounded-full mr-3">📊</span>
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">We collect the following information:</p>
                
                <div className="space-y-4">
                  <div className="bg-pastel-yellow/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">📍</span>Location Information
                    </h3>
                    <p className="text-gray-700">
                      We collect your precise location (via GPS or other technologies) to provide transport-related features, 
                      such as showing nearby transport options and routes relevant to your current location.
                    </p>
                  </div>
                  
                  <div className="bg-pastel-orange/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">🔔</span>Notifications
                    </h3>
                    <p className="text-gray-700">
                      Our App may send notifications while running in the foreground to provide you with transport updates or alerts. 
                      These notifications do not involve collecting any additional personal data.
                    </p>
                  </div>
                </div>
                
                <div className="bg-pastel-pink/30 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 font-medium">
                    We do not collect personally identifiable information such as your name, email, or phone number.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-purple/50 p-2 rounded-full mr-3">🔧</span>
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">We use the location data we collect:</p>
                
                <ul className="space-y-3">
                  <li className="bg-pastel-green/30 p-3 rounded-lg flex items-start">
                    <span className="mr-3 text-green-600">•</span>
                    <span className="text-gray-700">To display nearby public transport information</span>
                  </li>
                  <li className="bg-pastel-blue/30 p-3 rounded-lg flex items-start">
                    <span className="mr-3 text-blue-600">•</span>
                    <span className="text-gray-700">To provide route suggestions and updates relevant to your current location</span>
                  </li>
                  <li className="bg-pastel-purple/30 p-3 rounded-lg flex items-start">
                    <span className="mr-3 text-purple-600">•</span>
                    <span className="text-gray-700">To improve and enhance our App's functionality and services</span>
                  </li>
                </ul>
                
                <div className="bg-pastel-yellow/30 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 font-medium">
                    We do not use your location for tracking you outside the context of delivering transport-related features.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-orange/50 p-2 rounded-full mr-3">🤝</span>
                  3. Data Sharing
                </h2>
                <div className="space-y-4">
                  <div className="bg-pastel-pink/30 p-4 rounded-lg">
                    <p className="text-gray-700">
                      We do not sell, trade, or otherwise transfer your personal information to outside parties. 
                      We may share anonymized or aggregated data for analytics purposes, but such data cannot identify you personally.
                    </p>
                  </div>
                  <div className="bg-pastel-blue/30 p-4 rounded-lg">
                    <p className="text-gray-700">
                      We may disclose information if required by law, regulation, or legal process.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-green/50 p-2 rounded-full mr-3">💾</span>
                  4. Data Retention
                </h2>
                <div className="bg-pastel-green/30 p-4 rounded-lg">
                  <p className="text-gray-700">
                    We retain location data only as long as necessary to provide services within the App. 
                    Once you close the App or stop using location-based features, we do not continue to track or store your location.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-purple/50 p-2 rounded-full mr-3">🔐</span>
                  5. Security
                </h2>
                <div className="bg-pastel-purple/30 p-4 rounded-lg">
                  <p className="text-gray-700">
                    We implement reasonable security measures to protect your data from unauthorized access, disclosure, or misuse.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-yellow/50 p-2 rounded-full mr-3">👶</span>
                  6. Children's Privacy
                </h2>
                <div className="bg-pastel-yellow/30 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Our App is not directed toward children under 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-orange/50 p-2 rounded-full mr-3">🔄</span>
                  7. Changes to This Privacy Policy
                </h2>
                <div className="bg-pastel-orange/30 p-4 rounded-lg">
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this Policy. 
                    Your continued use of the App means you accept the revised Policy.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-pastel-pink/50 p-2 rounded-full mr-3">📧</span>
                  8. Contact Us
                </h2>
                <div className="bg-pastel-pink/30 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <a 
                    href="mailto:adormantsakthi@gmail.com" 
                    className="text-primary hover:text-primary-dark font-medium underline"
                  >
                    adormantsakthi@gmail.com
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;