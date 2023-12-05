import { useState, createContext } from "react";
import { rac } from "../Data/DownloadData";

const DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [racd, setRacd] = useState(rac);

  return (
    <DownloadContext.Provider
      value={{
        racd,
        setRacd,
      }}
    >
      {children}
    </DownloadContext.Provider>
  );
};

export default DownloadContext;
