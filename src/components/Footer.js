import React from "react";
import ButtonMaitto from "./ButtonMaitto";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Footer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className=" ">
      <div class="bg-[#0e2933] p-4 text-center text-white  bottom-0 w-full ">
        <div className="flex justify-center">
          <a href="#" className="text-gray-700 hover:text-red-500 mx-4">
            <ButtonMaitto mailto="director.research@ptuniv.edu.in"></ButtonMaitto>
          </a>
        </div>
        2023:
        <a class="text-white "> PTU RESEARCH WEBSITE</a>
        <span className="text-[20px] text-blue-200">
          <br />
          {searchParams.get("type")}
        </span>
      </div>
    </div>
  );
};

export default Footer;
