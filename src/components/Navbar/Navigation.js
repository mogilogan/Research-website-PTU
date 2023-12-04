import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assests/ptu-logo.png";
import { useLocation } from "react-router-dom";

import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import { NavBarLi } from "./MenuToggler";
//ofice ofg the director Academic Research
const Navigation = () => {
  const [show, setShow] = useState(false);

  const [hide, setHide] = useState(true);
  let location = useLocation();

  useEffect(() => {
    if (window.location.pathname.length === 1) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [location]);

  return (
    <div>
      {hide === true && (
        <div className="bg-black z-50 text-white h-[6rem]  py-4 border-b-2 border-[#00063d] ">
          <div className="flex justify-between">
            <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 2 }}
            >
              <div className="px-4">
                <img className="" src={logo} width={40} />
              </div>
              <h1 className="hidden px-10 md:block text-[2rem]">
                Office of Director (Academic Research)
              </h1>{" "}
              <span className="block  text-[1.5rem] md:hidden">
                Off. of Director
                <br />
                (Academic Research)
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 2 }}
            >
              <h1 className="hidden px-10 md:block text-[1.5rem]">
                {"PUDUCHERRY TECHNOLOGICAL UNIVERSITY"}
              </h1>{" "}
              <span className="block px-4 text-[2rem] md:hidden">PTU</span>
            </motion.div>
          </div>
        </div>
      )}
      <div className="bg-black z-50 text-white h-[4rem] px-10 py-4 relative">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 2 }}
            className="lg:hidden"
          >
            <button onClick={() => setShow(!show)}>
              {show ? (
                <AiOutlineClose className="w-[2rem] h-[2rem]" />
              ) : (
                <AiOutlineAlignRight className="w-[2rem] h-[2rem]" />
              )}
            </button>
          </motion.div>
          <div className="hidden lg:block">
            <NavBarLi />
          </div>
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ right: "-100%" }}
              animate={{ right: "0%" }}
              exit={{ right: "-100%" }}
              transition={{ duration: 0.7 }}
              className="lg:hidden h-screen bg-black text-white absolute w-[70%] top-[3.9rem] right-0"
            >
              <div className="mt-[4rem] mx-2">
                <NavBarLi />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Navigation;
