import AnimatedCharacters from "../Department/AnimateCharaters";
import { motion } from "framer-motion";
import adbro from "../../assests/admissions/adbro.pdf";
import adpro from "../../assests/admissions/adpro.pdf";
import { MdPictureAsPdf } from "react-icons/md";

const placeholderText = [
  { type: "heading1", text: "Office of the Academic Research" },
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Admissions = () => {
  return (
    <div className=" text-center items-center ">
      <div>
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={"visible"}
          variants={container}
        >
          <div className="container pt-6">
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
          <div className="block bg-[#3e9bc0] px-4 py-4 w-[90%] mx-auto rounded-xl sm:flex sm:gap-10 mt-5 sm:mt-5">
            <div className="font-general-regular    sm:w-[90%] text-justify">
              <p className="mb-4  text-ternary-dark dark:text-ternary-light text-sm sm:text-xl">
                Notification for Ph.D. Admissions (Regular/ QIP/ NDF/ JRF) via
                Full Time / Part Time (Internal& External) mode in PTU for every
                Academic year will be announced during the month of March –June.
                Details will be published in the PTU website{" "}
                <a
                  className="text-[#fffd78]"
                  target="_blank"
                  href="https://www.ptuniv.edu.in"
                >
                  www.ptuniv.edu.in
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 12 }}
          exit={{ opacity: 1 }}
          className=" container text-center flex  items-center pt-10  mx-auto"
        >
          <MdPictureAsPdf style={{ color: "#b8273f" }} size={50} />
          <span>
            Download QIP Ph.D and M.Tech Admission Brochure 2022-2023{" "}
            <a
              className="heart text-lg text-[rgb(84,80,175)]"
              href={adbro}
              download="Phd Regulations 2021"
            >
              here.
            </a>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 12 }}
          exit={{ opacity: 1 }}
          className=" container text-center flex pt-10 items-center  mx-auto"
        >
          <MdPictureAsPdf style={{ color: "#b8273f" }} size={50} />
          <span>
            PTU_Ph.D. Admission-prospectus-2023_24{" "}
            <a
              className="heart text-lg text-[rgb(84,80,175)]"
              href={adpro}
              download="Phd Regulations 2021"
            >
              here.
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;
