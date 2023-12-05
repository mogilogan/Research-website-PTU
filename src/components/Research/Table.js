import React from "react";

import Row from "./Row";
import { useState } from "react";
import { motion } from "framer-motion";

const springs = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Table = ({ values, name }) => {
  const [pu, setPu] = useState(false);
  const [rpu, setRpu] = useState(0);

  const toggleClg = () => {
    if (pu === true) {
      setRpu(0);
    } else {
      setRpu(1);
    }
    setPu(!pu);
  };
  return (
    <section class="container mx-auto p-6 font-mono">
      <motion.div>
        <div className="py-4 flex justify-center items-center">
          <p className="text-2xl px-2">PU</p>
          <div className="switch" data-isOn={pu} onClick={toggleClg}>
            <motion.div className="handle" layout transition={springs} />
          </div>
          <p className="text-2xl px-2">PTU</p>
        </div>
      </motion.div>

      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <p className="text-center mx-auto  font-mono text-2xl">
            Department of {name}
          </p>
          <Row special={values[rpu]} />
        </div>
      </div>
    </section>
  );
};

export default Table;
