import React from "react";

const Row = ({ special }) => {
  return (
    <>
      <tr class="text-gray-700  font-serif">
        <td colSpan="3" class="px-4 py-3 border ">
          <p class="font-semibold text-[#245a7c] text-2xl">{special.id}</p>
        </td>
      </tr>
      {special.names.map((value, index) => (
        <tr class="text-gray-700 font-mono">
          <td class="px-4 py-3 border">
            <div class="flex items-center text-sm">
              <div>
                <p class="font-semibold text-black">{index + 1}</p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-ms font-semibold border">{value.name}</td>
          <td class="px-4 py-3 text-xs border">{value.area}</td>
        </tr>
      ))}
    </>
  );
};

export default Row;
