import React from "react";

const Carousel = ({ children, refContainer }) => {
  return <div className="flex -mx-4 flex-row relative">{children}</div>;
};

export default Carousel;
