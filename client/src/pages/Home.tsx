import Hero from "../components/Hero";
import Layout from "../components/Layout";
import AboutSection from "./Homepage/AboutSection";
import DownloadApp from "./Homepage/DownloadApp";
import ExploreSearch from "./Homepage/ExploreSearch";
import FAQSection from "./Homepage/FAQSection";
import LatestNews from "./Homepage/LatestNews";
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
      <FAQSection />
      <DownloadApp />
      <LatestNews />
      <Layout />
    </>
  );
};

export default Home;
