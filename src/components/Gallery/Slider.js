import * as React from "react";
import AnimatedCharacters from "../Department/AnimateCharaters";
import { motion } from "framer-motion";
import { Gallerys } from "./image-data";

import Car from "./Car";
import { useState } from "react";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Gallery = () => {
  const { workshop, session, orient } = Gallerys;

  const [name, setName] = useState("WORKSHOP");

  const handleChange = (e) => {
    const selectedName = e.target.value;
    setName(selectedName);
  };
  return (
    <div>
      <div class="flex py-6 justify-center gap-4 items-center">
        <p className="heading1">Select Album: </p>
        <select
          className=" rounded-2xl md:px-2 py-2 border-[4px] border-[#663c3c]"
          style={{ width: "200px", "-webkit-appearance": "none" }}
          value={name}
          onChange={(e) => handleChange(e)}
        >
          <option name="WORKSHOP">WORKSHOP</option>
          <option name="ORIEN">ORIENTATION</option>
          <option name="SESSIONS">SESSIONS</option>
        </select>
      </div>
      {
        {
          WORKSHOP: (
            <div>
              {" "}
              <motion.div
                className="App"
                initial="hidden"
                // animate="visible"
                animate={"visible"}
                variants={container}
              >
                <div className="container pt-6">
                  <AnimatedCharacters
                    {...{ type: "gallerys", text: "Workshop" }}
                  />
                  ;
                </div>
              </motion.div>
              <Car gallery2={workshop} />
            </div>
          ),
          ORIENTATION: (
            <div>
              {" "}
              <motion.div
                className="App"
                initial="hidden"
                // animate="visible"
                animate={"visible"}
                variants={container}
              >
                <div className="container pt-6">
                  <AnimatedCharacters
                    {...{ type: "gallerys", text: "Orientation" }}
                  />
                  ;
                </div>
              </motion.div>
              <Car gallery2={orient} />
            </div>
          ),
          SESSIONS: (
            <div>
              {" "}
              <motion.div
                className="App"
                initial="hidden"
                // animate="visible"
                animate={"visible"}
                variants={container}
              >
                <div className="container pt-6">
                  <AnimatedCharacters
                    {...{ type: "gallerys", text: "Sessions" }}
                  />
                  ;
                </div>
              </motion.div>
              <Car gallery2={session} />
            </div>
          ),
        }[name]
      }
    </div>
  );
};

export default Gallery;
