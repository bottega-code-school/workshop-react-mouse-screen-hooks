import * as React from "react";
import { ImageSlider } from "./ImageSlider";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export const CustomCursorSlider = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="dt-full-screen-image-slider" ref={heroRef}>
      <ImageSlider />
    </div>
  );
};
