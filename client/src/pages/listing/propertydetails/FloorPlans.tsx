import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import { floorplans } from "../../../assets";

const FloorPlans = ({ listing }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white shadow-md p-3">
        <Accordion open={open === 1}>
          <AccordionHeader
            className="focus:text-primary hover:text-primary"
            onClick={() => handleOpen(1)}
          >
            1st Floor Stucture
          </AccordionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <AccordionBody>
              <div
                style={{
                  backgroundImage: `url(${floorplans})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "300px",
                }}
              />
            </AccordionBody>
            <AccordionBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney C
            </AccordionBody>
          </div>
        </Accordion>
      </div>
      <div className="bg-white shadow-md p-3">
        <Accordion open={open === 2}>
          <AccordionHeader
            className="focus:text-primary hover:text-primary"
            onClick={() => handleOpen(2)}
          >
            2nd Floor Stucture
          </AccordionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <AccordionBody>
              <div
                style={{
                  backgroundImage: `url(${floorplans})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "300px",
                }}
              />
            </AccordionBody>
            <AccordionBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney C
            </AccordionBody>
          </div>
        </Accordion>
      </div>
      <div className="bg-white shadow-md p-3">
        <Accordion open={open === 3}>
          <AccordionHeader
            className="focus:text-primary hover:text-primary"
            onClick={() => handleOpen(3)}
          >
            3rd Floor Stucture
          </AccordionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <AccordionBody>
              <div
                style={{
                  backgroundImage: `url(${floorplans})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "300px",
                }}
              />
            </AccordionBody>
            <AccordionBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney C
            </AccordionBody>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default FloorPlans;
