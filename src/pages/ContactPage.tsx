import Layout from '../components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <div className="mt-6">
          {/* Contact form will be implemented in a future task */}
          <p>Contact form coming soon.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;