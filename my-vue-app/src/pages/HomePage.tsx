import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center">Welcome to CommuteSG</h1>
        <p className="mt-4 text-xl text-center text-gray-600">
          Your essential companion for navigating Singapore's public transport system
        </p>
        {/* More content will be added in future tasks */}
      </div>
    </Layout>
  );
};

export default HomePage;