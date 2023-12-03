import { useState, createContext } from "react";
import {
  Civil,
  Physics,
  CSE,
  Chemical,
  Chemistry,
  ECE,
  EEE,
  IT,
  EIE,
  Maths,
  Mechanical,
  HSS,
} from "../Data/ResearchData";

const ResearchContext = createContext();

export const ResearchProvider = ({ children }) => {
  const [cse, setCse] = useState(CSE);
  const [civil, setCivil] = useState(Civil);
  const [chemistry, setChemistry] = useState(Chemistry);
  const [physics, setPhysics] = useState(Physics);
  const [ece, setEce] = useState(ECE);
  const [chemical, setChemical] = useState(Chemical);
  const [eee, setEee] = useState(EEE);
  const [it, setIt] = useState(IT);
  const [eie, setEie] = useState(EIE);
  const [maths, setMaths] = useState(Maths);
  const [mechanical, setMechanical] = useState(Mechanical);
  const [hss, setHss] = useState(HSS);

  return (
    <ResearchContext.Provider
      value={{
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
      }}
    >
      {children}
    </ResearchContext.Provider>
  );
};

export default ResearchContext;
