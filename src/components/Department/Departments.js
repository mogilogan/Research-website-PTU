import { DepartProvider } from "../../context/DepartContext";

import AnimatedCharacters from "./AnimateCharaters";
import { motion } from "framer-motion";
import reg from "../../assests/phd/reg.pdf";
import FixedTable from "./FixedTable";
import { MdPictureAsPdf } from "react-icons/md";

const placeholderText = [
  { type: "heading1", text: "Ph.D. Programme" },
  {
    type: "heading2",
    text: "Puducherry Technological University offers Ph.D. programme in the following disciplines:",
  },
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Departments = () => {
  return (
    <DepartProvider>
      <motion.div
        className="App"
        initial="hidden"
        // animate="visible"
        animate={"visible"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className="container mx-auto"
      >
        <FixedTable />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className=" container text-center flex  items-center  mx-auto"
      >
        <MdPictureAsPdf style={{ color: "#b8273f" }} size={50} />
        <span>
          Download PhD_Regulations 2021{" "}
          <a
            className="heart text-lg text-[rgb(84,80,175)]"
            href={reg}
            download="Phd Regulations 2021"
          >
            here.
          </a>
        </span>
      </motion.div>
    </DepartProvider>
  );
};

export default Departments;
