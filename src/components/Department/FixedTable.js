import React from "react";

import DepartContext from "../../context/DepartContext";
import { useContext } from "react";

const FixedTable = () => {
  const { depart } = useContext(DepartContext);
  return (
    <section class="container mx-auto p-6 font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Sl. No. </th>
                <th class="px-4 py-3">Programme</th>
                <th class="px-4 py-3">Discipline</th>
              </tr>
            </thead>

            <tbody class="bg-white">
              {depart.map((departs, key) => (
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div>
                        <p class="font-semibold text-black">{key + 1}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">
                    {departs.programme}
                  </td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 rounded-sm">
                      {departs.discipline.map((value, index) => (
                        <ul>
                          <li key={index}>
                            <span>{index + 1}: </span>
                            {value}
                          </li>
                        </ul>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FixedTable;
