import React from "react";
import { motion } from "framer-motion";
import { MdPictureAsPdf } from "react-icons/md";

const Files = ({ files }) => {
  return (
    <div>
      {files.map((file, key) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 12 }}
          exit={{ opacity: 1 }}
          className=" container text-center flex  items-center py-4  mx-auto"
        >
          <MdPictureAsPdf style={{ color: "#b8273f" }} size={50} />
          <span>
            {file.name}
            <a
              className="heart text-lg text-[rgb(84,80,175)]"
              href={file.url}
              download="Phd Regulations 2021"
            >
              here.
            </a>
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Files;
