import homes from "../../assests/home.jpg";
import { useContext } from "react";
import HomeContext from "../../context/HomeContext";

import res from "../../assests/res.jpg";
const About = () => {
  const { home } = useContext(HomeContext);

  return (
    <div>
      <h1 className="sm:text-4xl text-xl font-mono py-2 text-[#a75959]">
        OFFICE OF DIRECTOR (ACADEMIC RESEARCH){" "}
      </h1>
      <div class="container mx-auto md:px-6">
        <section class="mb-32">
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#00063d]">
            <div class="flex flex-wrap items-center">
              <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src={res}
                  alt="Trendy Pants and Shoes"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div class="w-full shrink-0 font-serif grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div class="px-6 py-12 md:px-12">
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    Doctor of Philosophy (Ph.D.) is the Highest Academic Degree
                    which requires in-depth study and extensive intellectual
                    effort. Research is one of the strongest components of
                    Puducherry Technological University (PTU) and it offers
                    various research programmes in different branches of
                    Engineering, Science, Humanities and Management. Around 200
                    faculty are recognized as research supervisors of our
                    university. Faculty members are actively pursuing
                    interdisciplinary and socially relevant research in thrust
                    areas with state–of–the–art equipment’s in addition to
                    teaching, consultancy and extension activities.
                  </p>
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    PTU is offering admission to Ph.D. programme once in a year.
                    Around 100 candidates (Regular/QIP/NDF/JRF) via Full Time /
                    Part Time (Internal& External) mode are registering for
                    Ph.D. programme every year. The Doctor of Philosophy (Ph.D.)
                    Degree is awarded to a candidate who, as per PTU
                    regulations, has submitted a thesis on the basis of original
                    research either in any particular subject/discipline or
                    involving more than one discipline(inter-disciplinary) that
                    makes a contribution to the advancement of knowledge as per
                    the PTU Ph.D regulations.
                  </p>
                  <p class=" text-neutral-500 dark:text-neutral-300">
                    Office of Director (Academic Research) is focusing fully on
                    e-Governance to speed up the process; online process for
                    Ph.D. entrance examination, application for Ph.D. admission,
                    fees collection, submission of soft copy of Synopsis and
                    Thesis, information / status of Ph.D. program needed by
                    research scholars/supervisors is being performed. It is also
                    providing a platform for the faculty members to interact
                    with other experts in their area of specialization within
                    India and abroad which provide an opportunity to understand
                    the research quality of PTU and also pave way for scientific
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
