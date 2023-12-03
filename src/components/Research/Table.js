import React from "react";

import Row from "./Row";

const Table = ({ values, name }) => {
  console.log(values);
  return (
    <section class="container mx-auto p-6 font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <p className="text-center mx-auto font-mono text-2xl">
            Department of {name}
          </p>

          {values.map((special, key) => (
            <>
              <Row key={key} special={special} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Table;
