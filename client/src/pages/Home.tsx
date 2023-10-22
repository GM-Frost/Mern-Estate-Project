import Hero from "../components/Hero";
import Layout from "../components/Layout";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero
        heading="Buy, Sell, and Invest in Real Estate with Trusted agents and listings"
        message="lorem ipsum dolor sit amet, consectetur adip"
      />

      <Layout />
    </>
  );
};

export default Home;
