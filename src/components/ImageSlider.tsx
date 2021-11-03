import * as React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
  require("../../static/assets/images/1.jpg"),
  require("../../static/assets/images/2.jpg"),
  require("../../static/assets/images/3.jpg"),
  require("../../static/assets/images/4.jpg"),
  require("../../static/assets/images/5.jpg"),
  require("../../static/assets/images/7.jpg"),
];

export const ImageSlider = () => {
  const galleryConfig = {
    showThumbs: false,
    stopOnHover: true,
    autoPlay: true,
    infiniteLoop: true,
    dynamicHeight: false,
    emulateTouch: true,
    interval: 7000,
    showArrows: true,
    showIndicators: false,
    showStatus: false,
  };

  return (
    <div className="image-slider">
      <Carousel {...galleryConfig}>
        {images.map((image, index) => (
          <img key={index} src={image} className="slider-img" />
        ))}
      </Carousel>
    </div>
  );
};
