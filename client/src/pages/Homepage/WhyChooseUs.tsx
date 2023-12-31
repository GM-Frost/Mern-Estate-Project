import { FaRegHandshake } from "react-icons/fa";
import { Abstract11 } from "../../assets/index.js";
import { MdSupportAgent } from "react-icons/md";
import { GiHouseKeys, GiReceiveMoney } from "react-icons/gi";
import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      className="py-16 min-h-[400px] w-full flex"
      style={{
        backgroundImage: `url(${Abstract11})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(113,102,240, 1)",
      }}
    >
      <div className="mx-auto mt-10 flex flex-col">
        <motion.div
          whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="flex flex-col text-white flex-wrap justify-center items-center space-y-2"
        >
          <p className="text-xl">4 Step to go</p>
          <h1 className="text-4xl font-semibold">Why Choose Us</h1>
        </motion.div>
        <div className="mt-16 flex lg:flex-row flex-col lg:justify-evenly justify-center lg:gap-20 gap-10 ">
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="relative rounded-full p-2 text-center bg-white h-20 w-20 flex items-center justify-center">
              <FaRegHandshake className="text-5xl text-primaryDark" />
              <p className="absolute -top-2 right-0 bg-neutral rounded-full text-center items-center p-1">
                <span className="rounded-full p-1 bg-neutral">01</span>
              </p>
            </div>
            <div className="text-white justify-center items-center space-y-1">
              <h3 className="font-semibold text-xl">Trusted</h3>
              <p>Build trust through quality service</p>
            </div>
          </motion.div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="relative rounded-full p-2 text-center bg-white h-20 w-20 flex items-center justify-center">
              <MdSupportAgent className="text-5xl text-primaryDark" />
              <p className="absolute -top-2 right-0 bg-neutral rounded-full text-center items-center p-1">
                <span className="rounded-full p-1 bg-neutral">02</span>
              </p>
            </div>
            <div className="text-white justify-center items-center space-y-1">
              <h3 className="font-semibold text-xl">24/7 Support</h3>
              <p>Round-the-clock assistance for your needs</p>
            </div>
          </motion.div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="relative rounded-full p-2 text-center bg-white h-20 w-20 flex items-center justify-center">
              <GiReceiveMoney className="text-5xl text-primaryDark" />
              <p className="absolute -top-2 right-0 bg-neutral rounded-full text-center items-center p-1">
                <span className="rounded-full p-1 bg-neutral">03</span>
              </p>
            </div>
            <div className="text-white justify-center items-center space-y-1">
              <h3 className="font-semibold text-xl">Financing Easy</h3>
              <p>Simplify financing procedures</p>
            </div>
          </motion.div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="relative rounded-full p-2 text-center bg-white h-20 w-20 flex items-center justify-center">
              <GiHouseKeys className="text-5xl text-primaryDark" />
              <p className="absolute -top-2 right-0 bg-neutral rounded-full text-center items-center p-1">
                <span className="rounded-full p-1 bg-neutral">04</span>
              </p>
            </div>
            <div className="text-white justify-center items-center space-y-1">
              <h3 className="font-semibold text-xl">Wide Range House</h3>
              <p>Diverse range of available properties</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
