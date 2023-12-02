import { useState, createContext } from "react";
import { engtech, scihum } from "../Data/SuperPtuData";
import { pengtech, pscihum } from "../Data/SuperPkietData";

const SuperContext = createContext();

export const SuperProvider = ({ children }) => {
  const [ptueng, setPtueng] = useState(engtech);
  const [ptusci, setPtusci] = useState(scihum);
  const [pkieteng, setPkieteng] = useState(pengtech);
  const [pkietsci, setPkietsci] = useState(pscihum);

  return (
    <SuperContext.Provider
      value={{
        ptueng,
        ptusci,
        pkietsci,
        pkieteng,
      }}
    >
      {children}
    </SuperContext.Provider>
  );
};

export default SuperContext;
