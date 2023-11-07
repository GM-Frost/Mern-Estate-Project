import Hero from "../components/Hero";
import Layout from "../components/Layout";
import AboutSection from "./Homepage/AboutSection";
import ExploreSearch from "./Homepage/ExploreSearch";
import LatestProperty from "./Homepage/LatestProperty";
import MeetAgents from "./Homepage/MeetAgents";
import WhyChooseUs from "./Homepage/WhyChooseUs";

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
      <WhyChooseUs />
      <MeetAgents />
      <Layout />
    </>
  );
};

export default Home;
