import * as React from "react";
import AnimatedCharacters from "../Department/AnimateCharaters";
import { motion } from "framer-motion";
import { Gallerys } from "./image-data";

import Car from "./Car";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Gallery = () => {
  const { workshop, session, orient } = Gallerys;
  return (
    <div>
      <div className="">
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={"visible"}
          variants={container}
        >
          <div className="container pt-6">
            <AnimatedCharacters {...{ type: "gallerys", text: "Workshop" }} />;
          </div>
        </motion.div>
        <Car gallery2={workshop} />
      </div>
      <div className="">
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={"visible"}
          variants={container}
        >
          <div className="container pt-6">
            <AnimatedCharacters {...{ type: "heading1", text: "Sessions" }} />;
          </div>
        </motion.div>
        <Car gallery2={session} />
      </div>
      <div className="">
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={"visible"}
          variants={container}
        >
          <div className="container pt-6">
            <AnimatedCharacters
              {...{ type: "heading1", text: "Orientation" }}
            />
            ;
          </div>
        </motion.div>
        <Car gallery2={orient} />
      </div>
    </div>
  );
};

export default Gallery;
