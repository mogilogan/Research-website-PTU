import React from "react";
import AnimatedCharacters from "../Department/AnimateCharaters";
import { motion } from "framer-motion";

import Table from "./Table";
import { useContext, useState } from "react";

import ResearchContext from "../../context/ResearchContext";

const Select = () => {
  const {
    cse,
    civil,
    chemical,
    chemistry,
    physics,
    ece,
    eee,
    eie,
    it,
    maths,
    mechanical,
    hss,
  } = useContext(ResearchContext);

  const [name, setName] = useState("CSE");

  const handleChange = (e) => {
    const selectedName = e.target.value;
    setName(selectedName);
  };

  return (
    <div>
      <div class="flex py-6 justify-center items-center">
        <p className="heading1">Select Departments: </p>
        <select value={name} onChange={(e) => handleChange(e)}>
          <option name="CSE">CSE</option>
          <option name="CIVIL">CIVIL</option>
          <option name="CHEMICAL">CHEMICAL</option>
          <option name="PHYSICS">PHYSICS</option>
          <option name="CHEMISTRY">CHEMISTRY</option>
          <option name="ECE">ECE</option>
          <option name="EEE">EEE</option>
          <option name="EIE">EIE</option>
          <option name="IT">IT</option>
          <option name="MATHS">MATHS</option>
          <option name="MECHANICAL">MECHANICAL</option>
          <option name="HSS">HSS</option>
        </select>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className="container mx-auto"
      >
        {
          {
            CSE: <Table values={cse} name={name} />,
            MECHANICAL: <Table values={mechanical} name={name} />,
            CIVIL: <Table values={civil} name={name} />,
            CHEMICAL: <Table values={chemical} name={name} />,
            PHYSICS: <Table values={physics} name={name} />,
            CHEMISTRY: <Table values={chemistry} name={name} />,
            ECE: <Table values={ece} name={name} />,
            EEE: <Table values={eee} name={name} />,
            EIE: <Table values={eie} name={name} />,
            IT: <Table values={it} name={name} />,
            MATHS: <Table values={maths} name={name} />,
            HSS: <Table values={hss} name={name} />,
          }[name]
        }
      </motion.div>
    </div>
  );
};

export default Select;
