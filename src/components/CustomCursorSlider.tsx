import * as React from "react";
import { useMousePosition, useResponsive, useViewPortPosition } from "./hooks";
import { ImageSlider } from "./ImageSlider";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export const DTSliderMouse = () => {
  const { x, y } = useMousePosition();
  const { windowWidth } = useResponsive();
  const middle = windowWidth / 2;

  if (x && y && middle) {
    return (
      <div style={{ left: `${x}px`, top: `${y}px` }} className="slider-cursor">
        {x < middle ? <AiFillCaretLeft /> : <AiFillCaretRight />}
      </div>
    );
  } else {
    return null;
  }
};

export const CustomCursorSlider = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const viewPortPosition = useViewPortPosition(heroRef);
  const { x: horizontalMousePosition, y: verticalMousePosition } =
    useMousePosition();

  const mouseIsHovering =
    verticalMousePosition >= viewPortPosition?.top &&
    verticalMousePosition <= viewPortPosition?.bottom &&
    horizontalMousePosition >= viewPortPosition?.left &&
    horizontalMousePosition <= viewPortPosition?.right;

  const showSliderMouse = () => {
    console.log("view port", viewPortPosition);
    console.log(
      "mouse position",
      verticalMousePosition,
      horizontalMousePosition
    );
    if (!viewPortPosition) {
      return true;
    } else if (mouseIsHovering) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="dt-full-screen-image-slider" ref={heroRef}>
      {showSliderMouse() && <DTSliderMouse />}
      <ImageSlider />
    </div>
  );
};
