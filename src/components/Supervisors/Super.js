import { SuperProvider } from "../../context/SuperContext";

import AnimatedCharacters from "../Department/AnimateCharaters";
import { motion } from "framer-motion";

import Table from "./Table";
import { useState } from "react";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Super = () => {
  const [isptu, setIsPtu] = useState(false);
  const [issci, setIsSci] = useState(false);

  const toggleClg = () => setIsPtu(!isptu);
  const toggleDept = () => setIsSci(!issci);
  return (
    <SuperProvider>
      <div className="py-4 flex justify-center items-center">
        <p className="text-2xl px-2">PTU</p>
        <div className="switch" data-isOn={isptu} onClick={toggleClg}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <p className="text-2xl px-2">PKIET</p>
      </div>

      <div className="py-4 flex justify-center items-center">
        <p className="text-2xl px-2">ENG/TECH</p>
        <div className="switch" data-isOn={issci} onClick={toggleDept}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <p className="text-2xl px-2">SCI&HUM</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className="container mx-auto"
      >
        <Table value={isptu} values={issci} />
      </motion.div>
    </SuperProvider>
  );
};

export default Super;
