import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ExploreSearch from "./Homepage/ExploreSearch";

const Home = () => {
  return (
    <>
      <Hero
        heading="Buy, Sell, and Invest in Real Estate with Trusted agents and listings"
        message="lorem ipsum dolor sit amet, consectetur adip"
      />
      <ExploreSearch />
      <Layout />
    </>
  );
};

export default Home;
