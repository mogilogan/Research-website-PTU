import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

import adminflow from "../../assests/circulars/adminflow.pdf";
import gnorms from "../../assests/circulars/gnorms.pdf";

import { motion } from "framer-motion";
import AnimateCharacters from "../Department/AnimateCharaters";

const placeholderText = [{ type: "heading1", text: "Circulars" }];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Circulars = () => {
  return (
    <div className="items-center text-center">
      <motion.div
        className="App"
        initial="hidden"
        // animate="visible"
        animate={"visible"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimateCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className=" container text-center flex  items-center py-4  mx-auto"
      >
        <MdPictureAsPdf style={{ color: "#b8273f" }} size={50} />
        <span>
          Download Admission Flow{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={adminflow}
            download="Phd Regulations 2021"
          >
            here.
          </a>
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className=" container text-center flex  items-center py-4   mx-auto"
      >
        <MdPictureAsPdf style={{ color: "#b8273f" }} size={50} />
        <span>
          Download Guidelines norms 22.08.2023{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={gnorms}
            download="Phd Regulations 2021"
          >
            here.
          </a>
        </span>
      </motion.div>
    </div>
  );
};

export default Circulars;
