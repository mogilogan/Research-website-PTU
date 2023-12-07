import { useContext } from "react";

import HomeContext from "../../context/HomeContext";

const Heads = () => {
  const { heads } = useContext(HomeContext);

  return (
    <section className="pb-10 md:mb-20 sm:py-10 mt-5 sm:mt-10">
      <h1 className="sm:text-4xl text-xl font-sans py-2 text-[#a75959]">
        OFFICIALS
      </h1>
      <div class="py-2 bg-gray-50">
        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="mb-16 text-center"></div>
          <div class="grid gap-12 items-center md:grid-cols-3">
            {heads.map((head) => (
              <div class="space-y-4 text-center">
                <img
                  class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src={head.img}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 class="text-2xl">{head.name}</h4>
                  <span class="block text-sm text-gray-500">{head.prof}</span>
                  <h4 class="text-xl py-2">
                    {" "}
                    {head.title.split("\n").map((line, index) => (
                      <p key={index}>
                        {line}
                        <br />
                      </p>
                    ))}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heads;
