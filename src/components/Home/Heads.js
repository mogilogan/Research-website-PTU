import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import Single from "./Single";
import HomeContext from "../../context/HomeContext";

const Heads = () => {
  const { heads, setHeads } = useContext(HomeContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Officials
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {heads.map((head) => (
          <Single
            title={head.title}
            category={head.category}
            image={head.img}
            key={head.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Heads;
