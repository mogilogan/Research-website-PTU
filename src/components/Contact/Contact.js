import React, { useEffect, useState } from "react";
import { FaFax } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simulate setting the pre-filled content after component mount
    setMessage(
      "Office of the Director research," +
        "\n" +
        "Puducherry technological university," +
        "\n" +
        "East coast Road, Pillaichavady, Puducherry, 605 014."
    );
  }, []);
  return (
    <div>
      {" "}
      <div>
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                PTU Research Website
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-[40px] text-gray-600"
                    >
                      Address:
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      value={message}
                      readOnly
                    ></textarea>
                  </div>
                </div>

                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <FaFax size={30} />
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    2655101
                  </div>
                </div>

                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <BsTelephone size={30} />
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    0413-2655281-288
                  </div>
                </div>

                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <IoMdMail size={30} />
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    director.research@ptuniv.edu.in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
