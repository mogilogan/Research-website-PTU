import { useState, createContext } from "react";
import { HomeData, HeadsData } from "../Data/HomeData";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [home, setHome] = useState(HomeData);
  const [heads, setHeads] = useState(HeadsData);

  return (
    <HomeContext.Provider
      value={{
        home,
        setHome,
        heads,
        setHeads,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
