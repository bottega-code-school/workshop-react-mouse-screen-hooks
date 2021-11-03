import * as React from "react";

export const useViewPortPosition = (ref: any) => {
  const [position, setPosition] = React.useState<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  }>(undefined);

  React.useEffect(() => {
    const viewPortHandler = () => {
      const viewPortPosition = ref?.current?.getBoundingClientRect();

      setPosition({
        top: viewPortPosition.top,
        bottom: viewPortPosition.bottom,
        left: viewPortPosition.left,
        right: viewPortPosition.right,
      });
    };

    document.addEventListener("mousemove", viewPortHandler, { passive: true });

    return () => {
      document.removeEventListener("mousemove", viewPortHandler);
    };
  }, []);

  if (position) {
    return position;
  } else {
    return null;
  }
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};

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
