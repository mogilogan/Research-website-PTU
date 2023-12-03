import { ResearchProvider } from "../../context/ResearchContext";
import Select from "./Select";

const Research = () => {
  return (
    <ResearchProvider>
      <Select />
    </ResearchProvider>
  );
};

export default Research;
