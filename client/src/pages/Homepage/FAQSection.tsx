import React, { useState } from "react";
import { AbstractFAQ, FAQImage } from "../../assets";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { MdOutlineSupportAgent } from "react-icons/md";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section
      className="py-16 min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: `url(${AbstractFAQ})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <div className="mx-auto w-[90%]  mt-10 flex flex-col md:flex-row justify-center items-center space-y-5 gap-12">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl capitalize">FAQ</h2>
            <h1 className="text-4xl capitalize font-bold">
              If you want to know Frequently Asked Questions
            </h1>
            <div className="mt-5">
              <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Nova Estate?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Who are we?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  How do I make a Listing?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <div className="relative">
            <img
              src={FAQImage}
              className="rounded-md md:h-[550px] lg:h-[750px]"
            />
            <div className="absolute bottom-0 right-0 p-2 md:p-5  mx-auto bg-primaryDark text-white items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="w-1/3">
                  <MdOutlineSupportAgent className="text-5xl md:text-8xl" />
                </div>
                <div className="w-2/3 space-y-3">
                  <h1 className="font-semibold md:text-3xl">24/7 Support</h1>
                  <p>Have any Questions? Contact Us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
