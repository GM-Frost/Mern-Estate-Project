import Hero from "./Hero";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero heading="Find your dream home" message="Get Started" />
    </>
  );
};

export default Header;
