import React, { useRef } from "react";

const Carousel = ({ children, refContainer }) => {
  const refDragHandler = useRef(null);

  return (
    <div ref={refDragHandler} className="flex -mx-4 flex-row relative">
      {children}
    </div>
  );
};

export default Carousel;
