import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export const NavBarLi = () => {
  return (
    <ul className="lg:flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Home
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/phd">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Ph.D. Programme
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/admissions">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Admissions
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/supervisors">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Supervisors
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/research">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Research Scholars
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/publications">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Publications & Awards
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/circulars">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Circulars
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/downloads">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Downloads
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/gallery">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Gallery
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="my-4 lg:my-0 border-b-2 lg:border-b-0"
      >
        <Link to="/contact">
          <a
            className="text-[1.0rem] md:text-[0.8rem] 2xl:text-[1.0rem] px-4 lg:hover:border-b-2"
            href="#"
          >
            Contact
          </a>
        </Link>
      </motion.div>
    </ul>
  );
};
