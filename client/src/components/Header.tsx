import Hero from "./Hero";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero
        heading="Buy, Sell, and Invest in Real Estate with Trusted agents and listings"
        message="lorem ipsum dolor sit amet, consectetur adip"
      />
    </>
  );
};

export default Header;
