import { HomeProvider } from "../../context/HomeContext";
import About from "./About";

import { motion } from "framer-motion";
import Heads from "./Heads";

const Home = () => {
  return (
    <HomeProvider>
      <section>
        <div class=" text-black py-20">
          <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                Ph.D. & Research
              </h1>
              <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Puducherry Technological University
              </h2>
              <p class="text-sm md:text-base text-gray-700 mb-4">
                In the pursuit of knowledge, there is no finish line. Embrace
                the journey of discovery.
              </p>
              <a
                href="#"
                class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div class="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    class="inline-block mt-28 hidden xl:block"
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-28 hidden lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div>
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
