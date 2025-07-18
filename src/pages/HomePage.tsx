import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SupportSection from '../components/sections/SupportSection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <SupportSection />
    </Layout>
  );
};

export default HomePage;