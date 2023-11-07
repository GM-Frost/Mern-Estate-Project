import { Abstract10 } from "../../assets";

const AboutSection = () => {
  return (
    <section
      className="py-16 min-h-screen w-full flex  items-center justify-center"
      style={{
        backgroundImage: `url(${Abstract10})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-1/2">Left</div>
          <div className="w-1/2 flex flex-col">
            <h3>About Nova</h3>
            <h1 className="text-3xl font-bold">
              Have done some Coo Stuff with common users
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              Over 20 years’ experience providing top quality house Booking in
              to the rant and sell for your Amazing Dream & Make you Happy
            </p>
            <div className="flex justify-evenly">
              <div className="w-full">Left</div>
              <div className="w-full">Right</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
