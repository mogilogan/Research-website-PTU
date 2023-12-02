import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Car = ({ gallery2 }) => {
  return (
    <div>
      <Carousel
        className="pt-[30px] w-[60%] mx-auto"
        dynamicHeight={true}
        infiniteLoop
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
