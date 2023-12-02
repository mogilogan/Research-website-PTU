import { HomeProvider } from "../../context/HomeContext";
import About from "./About";

import { motion } from "framer-motion";
import Heads from "./Heads";

const Home = () => {
  return (
    <HomeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 12 }}
        exit={{ opacity: 1 }}
        className="container mx-auto"
      >
        <About />
      </motion.div>
      <div className="container mx-auto">
        <Heads />
      </div>
    </HomeProvider>
  );
};

export default Home;
