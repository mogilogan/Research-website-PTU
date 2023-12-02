import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

import one from "../../assests/downloads/one.doc";
import two from "../../assests/downloads/two.doc";
import three from "../../assests/downloads/three.doc";
import four from "../../assests/downloads/four.doc";
import five from "../../assests/downloads/five.doc";

import { motion } from "framer-motion";
import AnimateCharacters from "../Department/AnimateCharaters";

const placeholderText = [{ type: "downloads", text: "Downloads" }];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Downloads = () => {
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
          RAC Invitationm{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={one}
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
          RAC minutes covering letter{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={two}
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
          RAC I Minutes{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={three}
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
          RAC Minutes II_III_IV{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={four}
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
          RAC recommendation for synopsis submission{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={five}
            download="Phd Regulations 2021"
          >
            here.
          </a>
        </span>
      </motion.div>
    </div>
  );
};

export default Downloads;
