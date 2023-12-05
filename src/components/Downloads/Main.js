import React, { useContext, useState } from "react";

import { motion } from "framer-motion";
import AnimateCharacters from "../Department/AnimateCharaters";
import DownloadContext from "../../context/DownloadContext";
import Files from "./Files";

const placeholderText = [{ type: "heading1", text: "Downloads" }];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Main = () => {
  const { racd } = useContext(DownloadContext);

  const [name, setName] = useState("RAC");

  const handleChange = (e) => {
    const selectedName = e.target.value;
    setName(selectedName);
  };

  return (
    <div>
      {" "}
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
        <select
          className=" rounded-2xl md:px-2 py-2 border-[4px] border-[#663c3c]"
          style={{ width: "200px", "-webkit-appearance": "none" }}
          value={name}
          onChange={(e) => handleChange(e)}
        >
          <option name="RAC">RAC</option>
        </select>
      </div>
      {
        {
          RAC: <Files files={racd} />,
        }[name]
      }
    </div>
  );
};

export default Main;
