import { useState, createContext } from "react";
import { DepartData } from "../Data/DepartData";

const DepartContext = createContext();

export const DepartProvider = ({ children }) => {
  const [depart, setDepart] = useState(DepartData);

  return (
    <DepartContext.Provider
      value={{
        depart,
        setDepart,
      }}
    >
      {children}
    </DepartContext.Provider>
  );
};

export default DepartContext;
