import Layout from '../components/layout/Layout';

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-orange to-pastel-pink relative overflow-hidden">
        {/* Additional gradient overlays for enhanced visual effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pastel-green/20 via-transparent to-pastel-yellow/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pastel-orange/10 to-pastel-pink/30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4 py-2">
                  Privacy Policy
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/20 via-blue-300/20 to-pink-300/20 blur-xl rounded-lg"></div>
              </div>
              <p className="text-lg bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
                Last updated: 17/07/2025
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-pastel-blue/40 via-pastel-orange/30 to-pastel-pink/40 p-6 rounded-xl mb-8 border border-white/30 shadow-lg">
                <p className="text-gray-700 leading-relaxed">
                  CommuteSG ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application (the "App").
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-green/60 to-pastel-blue/60 p-2 rounded-full mr-3 shadow-md">📊</span>
                  <span className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                    1. Information We Collect
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">We collect the following information:</p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-pastel-yellow/40 to-pastel-orange/40 p-4 rounded-xl border border-yellow-200/50 shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">📍</span>Location Information
                    </h3>
                    <p className="text-gray-700">
                      We collect your precise location (via GPS or other technologies) to provide transport-related features, 
                      such as showing nearby transport options and routes relevant to your current location.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pastel-orange/40 to-pastel-pink/40 p-4 rounded-xl border border-orange-200/50 shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">🔔</span>Notifications
                    </h3>
                    <p className="text-gray-700">
                      Our App may send notifications while running in the foreground to provide you with transport updates or alerts. 
                      These notifications do not involve collecting any additional personal data.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pastel-pink/40 to-pastel-orange/40 p-4 rounded-xl mt-4 border border-pink-200/50 shadow-md">
                  <p className="text-gray-700 font-medium">
                    We do not collect personally identifiable information such as your name, email, or phone number.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-orange/60 to-pastel-pink/60 p-2 rounded-full mr-3 shadow-md">🔧</span>
                  <span className="bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">
                    2. How We Use Your Information
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">We use the location data we collect:</p>
                
                <ul className="space-y-3">
                  <li className="bg-gradient-to-r from-pastel-green/40 to-pastel-blue/30 p-3 rounded-xl flex items-start border border-green-200/40 shadow-sm">
                    <span className="mr-3 text-green-600">•</span>
                    <span className="text-gray-700">To display nearby public transport information</span>
                  </li>
                  <li className="bg-gradient-to-r from-pastel-blue/40 to-pastel-orange/30 p-3 rounded-xl flex items-start border border-blue-200/40 shadow-sm">
                    <span className="mr-3 text-blue-600">•</span>
                    <span className="text-gray-700">To provide route suggestions and updates relevant to your current location</span>
                  </li>
                  <li className="bg-gradient-to-r from-pastel-orange/40 to-pastel-pink/30 p-3 rounded-xl flex items-start border border-orange-200/40 shadow-sm">
                    <span className="mr-3 text-orange-600">•</span>
                    <span className="text-gray-700">To improve and enhance our App's functionality and services</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-pastel-yellow/40 to-pastel-orange/40 p-4 rounded-xl mt-4 border border-yellow-200/50 shadow-md">
                  <p className="text-gray-700 font-medium">
                    We do not use your location for tracking you outside the context of delivering transport-related features.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-orange/60 to-pastel-yellow/60 p-2 rounded-full mr-3 shadow-md">🤝</span>
                  <span className="bg-gradient-to-r from-orange-700 to-yellow-700 bg-clip-text text-transparent">
                    3. Data Sharing
                  </span>
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-pastel-pink/40 to-pastel-orange/40 p-4 rounded-xl border border-pink-200/50 shadow-md">
                    <p className="text-gray-700">
                      We do not sell, trade, or otherwise transfer your personal information to outside parties. 
                      We may share anonymized or aggregated data for analytics purposes, but such data cannot identify you personally.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-pastel-blue/40 to-pastel-green/40 p-4 rounded-xl border border-blue-200/50 shadow-md">
                    <p className="text-gray-700">
                      We may disclose information if required by law, regulation, or legal process.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-green/60 to-pastel-blue/60 p-2 rounded-full mr-3 shadow-md">💾</span>
                  <span className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                    4. Data Retention
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-pastel-green/40 to-pastel-blue/40 p-4 rounded-xl border border-green-200/50 shadow-md">
                  <p className="text-gray-700">
                    We retain location data only as long as necessary to provide services within the App. 
                    Once you close the App or stop using location-based features, we do not continue to track or store your location.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-orange/60 to-pastel-pink/60 p-2 rounded-full mr-3 shadow-md">🔐</span>
                  <span className="bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">
                    5. Security
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-pastel-orange/40 to-pastel-pink/40 p-4 rounded-xl border border-orange-200/50 shadow-md">
                  <p className="text-gray-700">
                    We implement reasonable security measures to protect your data from unauthorized access, disclosure, or misuse.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-yellow/60 to-pastel-orange/60 p-2 rounded-full mr-3 shadow-md">👶</span>
                  <span className="bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
                    6. Children's Privacy
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-pastel-yellow/40 to-pastel-orange/40 p-4 rounded-xl border border-yellow-200/50 shadow-md">
                  <p className="text-gray-700">
                    Our App is not directed toward children under 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-orange/60 to-pastel-pink/60 p-2 rounded-full mr-3 shadow-md">🔄</span>
                  <span className="bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">
                    7. Changes to This Privacy Policy
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-pastel-orange/40 to-pastel-pink/40 p-4 rounded-xl border border-orange-200/50 shadow-md">
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this Policy. 
                    Your continued use of the App means you accept the revised Policy.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-pastel-pink/60 to-pastel-orange/60 p-2 rounded-full mr-3 shadow-md">📧</span>
                  <span className="bg-gradient-to-r from-pink-700 to-orange-700 bg-clip-text text-transparent">
                    8. Contact Us
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-pastel-pink/40 to-pastel-orange/40 p-4 rounded-xl border border-pink-200/50 shadow-md">
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