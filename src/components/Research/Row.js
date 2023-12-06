import React from "react";

const Row = ({ special }) => {
  const data = special?.names;
  const reverse = [...data].reverse();

  console.log(reverse);
  return (
    <>
      <div class="table-wrp block">
        <table class="w-full">
          <thead className="sticky ">
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 font-serif bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">Sl. No. </th>
              <th class="px-4 py-3">name of the Scholar</th>
              <th class="px-4 py-3">Name of the Supervisor</th>
              <th class="px-4 py-3">Name of the Joint-Supervisor</th>
              <th class="px-4 py-3">Date of Admission</th>
              <th class="px-4 py-3">Mode(FT/PT)</th>
              <th class="px-4 py-3">Status(Completed/Ongoing)</th>
            </tr>
          </thead>
          <tbody class="bg-white overflow-y-auto">
            <tr class="text-gray-700">
              <td colspan="7" class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-bold font-serif text-2xl text-[#0239b177]">
                      List of Ph.D. Scholars Registered with {special.college}{" "}
                      (For Scholars admitted during {special.Admitted})
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            {special.names.length === 0 ? (
              <>
                <tr class=" mx-auto text-gray-700">
                  <td
                    colspan="7"
                    class="text-center items-center  px-4 py-3 border"
                  >
                    <div class="flex items-center text-sm">
                      <div>
                        <p class=" font-bold text-xl text-center text-[#a1aa25]">
                          Students not admitted by the Department
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            ) : (
              <>
                {reverse.map((value, index) => (
                  <tr key={index} class="text-gray-700 ">
                    <td class="px-4 py-3 border">
                      <div class="flex items-center text-sm">
                        <div>
                          <p class="font-semibold text-black">{index + 1}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">
                      {value.field2}
                    </td>
                    <td class="px-4 py-3 text-xs border">{value.field3}</td>
                    <td class="px-4 py-3 text-xs border">{value.field4}</td>
                    <td class="px-4 py-3 text-xs border">{value.field5}</td>
                    <td class="px-4 py-3 text-xs border">{value.field6}</td>
                    <td class="px-4 py-3 text-xs border">{value.field7}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Row;
