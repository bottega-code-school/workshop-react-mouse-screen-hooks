import * as React from "react";

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [window.innerWidth]);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  return {
    windowWidth,
    windowHeight,
  };
};
