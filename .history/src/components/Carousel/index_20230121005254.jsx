import React, { useRef, useState, useCallback, useLayoutEffect } from "react";

const Carousel = ({ children, refContainer }) => {
  const refDragHandler = useRef(null);

  return (
    <div ref={refDragHandler} className="flex -mx-4 flex-row relative">
      {children}
    </div>
  );
};

export default Carousel;
