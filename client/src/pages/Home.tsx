import Hero from "../components/Hero";
import Layout from "../components/Layout";
import AboutSection from "./Homepage/AboutSection";
import ExploreSearch from "./Homepage/ExploreSearch";
import LatestProperty from "./Homepage/LatestProperty";

const Home = () => {
  return (
    <>
      <Hero
        heading="Buy, Sell, and Invest in Real Estate with Trusted agents and listings"
        message="lorem ipsum dolor sit amet, consectetur adip"
      />
      <ExploreSearch />
      <AboutSection />
      <LatestProperty />
      <Layout />
    </>
  );
};

export default Home;
