import React from "react";

import SuperContext from "../../context/SuperContext";
import { useContext } from "react";
import Row from "./Row";

const Table = ({ value, values }) => {
  const { ptueng, ptusci, pkietsci, pkieteng } = useContext(SuperContext);
  return (
    <section class="container mx-auto p-6 font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          {value === false ? (
            <>
              <p className="text-center mx-auto font-mono text-2xl">
                Department wise list of PTU Research Supervisors with their Area
                of Specialisation
              </p>
              {values === false ? (
                <>
                  <p className="text-center mx-auto py-2 font-mono text-xl">
                    Discipline: Engineering/Technology
                  </p>
                </>
              ) : (
                <>
                  <p className="text-center mx-auto py-2 font-mono text-xl">
                    Discipline: Science and Humanities
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <p className="text-center mx-auto font-mono text-2xl">
                Department wise list of PKIET Research Supervisors with their
                Designation and Area of Specialisation
              </p>
              {values === false ? (
                <>
                  <p className="text-center mx-auto py-2 font-mono text-xl">
                    Discipline: Engineering/Technology
                  </p>
                </>
              ) : (
                <>
                  <p className="text-center mx-auto py-2 font-mono text-xl">
                    Discipline: Science and Humanities
                  </p>
                </>
              )}
            </>
          )}
          <table class="w-full">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Sl. No. </th>
                <th class="px-4 py-3">name of the Supervisor</th>
                <th class="px-4 py-3">Area of Specialisation</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {value === false ? (
                <>
                  {values === false ? (
                    <>
                      {ptueng.map((special, key) => (
                        <>
                          <Row special={special} />
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {ptusci.map((special, key) => (
                        <>
                          <Row special={special} />
                        </>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <>
                  {values === false ? (
                    <>
                      {pkieteng.map((special, key) => (
                        <>
                          <Row special={special} />
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {pkietsci.map((special, key) => (
                        <>
                          <Row special={special} />
                        </>
                      ))}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
