import homes from "../../assests/home.jpg";
import { useContext } from "react";
import HomeContext from "../../context/HomeContext";

const About = () => {
  const { home } = useContext(HomeContext);

  return (
    <div className="block bg-[#3e9bc0] px-4 py-4 rounded-xl sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className=" sm:w-1/4 w-4/5 mb-7 sm:mb-0 mx-auto">
        <img src={homes} className="rounded-lg w-96  " alt="" />
      </div>

      <div className="font-general-regular  mx-auto max-w-[75%] sm:w-3/4 text-justify">
        {home.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-sm sm:text-xl"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
