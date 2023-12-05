import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Car = ({ gallery2 }) => {
  return (
    <div>
      <Carousel
        className="pt-[30px] m-auto w-[80%] md:w-[800px] mx-auto"
        dynamicHeight={true}
        centerMode
        infiniteLoop
        interval={1500}
      >
        {gallery2.map((feature, index) => {
          // destructure feature
          const { photo } = feature;
          return (
            <div>
              <img src={photo} height="300px" width="200px" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Car;
