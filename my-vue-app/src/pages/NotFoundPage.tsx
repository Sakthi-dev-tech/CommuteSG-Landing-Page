import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl mt-2">Page Not Found</h2>
        <p className="mt-4 text-gray-600">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link 
            to="/" 
            className="inline-block bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;