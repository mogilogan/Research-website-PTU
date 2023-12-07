import { HomeProvider } from "../../context/HomeContext";
import About from "./About";

import { motion } from "framer-motion";
import Heads from "./Heads";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Gallerys } from "./image-data";

const Home = () => {
  return (
    <HomeProvider>
      <section>
        <div class="pb-20 text-black ">
          <div class="container mx-auto flex flex-col md:flex-row items-center my-8 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 class="text-3xl md:text-5xl p-2 text-[#00063d] tracking-loose">
                Ph.D. & Research
              </h1>
              <h2 class="text-3xl md:text-5xl text-gray-400 leading-relaxed md:leading-snug mb-2">
                Puducherry Technological University
              </h2>
              <p class="text-sm md:text-base text-gray-700 mb-4">
                The Ph.D. and Academic Research at PTU is administered by the
                Office of the Academic Research
              </p>
              <Link to="/phd">
                <p
                  href="/phd"
                  class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                >
                  Explore Now
                </p>
              </Link>
            </div>
            <div class="p-8 mt-12 mb-6 w-[80%] md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-4/5  justify-center">
              <Carousel
                className="pt-[30px] m-auto w-[80%] md:w-[800px] mx-auto"
                dynamicHeight={true}
                infiniteLoop
                interval={1500}
                showArrows={true}
                swipeable={true}
                showIndicators={false}
              >
                {Gallerys.map((feature, index) =>
                  // destructure feature
                  feature.photo.map((single, key) => (
                    <div>
                      <img src={single} height="300px" width="200px" />
                    </div>
                  ))
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
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
