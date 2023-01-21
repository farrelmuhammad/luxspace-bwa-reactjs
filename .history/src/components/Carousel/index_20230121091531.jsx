import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import { addClass } from "../../helpers/format/classNameModifier";

const Carousel = ({ children, refContainer }) => {
  const refDragHandler = useRef(null);
  const [index, setIndex] = useState(0);

  const threshold = 100;
  const itemToShow = window.innerWidth < 767 ? 1 : 4;
  const DIRECTION_LEFT = "DIRECTION_LEFT";
  const DIRECTION_RIGHT = "DIRECTION_RIGHT";

  const posInitial = useRef();
  const posX1 = useRef();
  const posX2 = useRef();
  const posFinal = useRef();
  const isAllowShift = useRef(true);
  const cards = useRef();
  const cardCount = cards.current?.length || 0;
  const cardSize = cards.current?.[0].offsetWidth || 0;

  const fnShiftItem = useCallback((direction) => {
    addClass(refDragHandler.current, "transition-all duration-200");

    if (isAllowShift.current) {
      if (direction === "DIRECTION_LEFT") {
        setIndex((prev) => prev + 1);
        refDragHandler.current.style.left = `${
          posInitial.current - cardSize
        }px`;
      } else if (direction === "DIRECTION_RIGHT") {
        setIndex((prev) => prev - 1);
        refDragHandler.current.style.left = `${
          posInitial.current + cardSize
        }px`;
      }
    }

    isAllowShift = false;
  }, []);

  const onDragMove = useCallback(
    (e) => {
      e = e || window.event;
      e.preventDefault();

      if (e.type === "touchmove") {
        posX2.current = posX1.current - e.touches[0].clientX;
        posX1.current = e.touches[0].clientX;
      } else {
        posX2.current = posX1.current - e.clientX;
        posX1.current = e.clientX;
      }

      refDragHandler.current.style.left = `${
        refDragHandler.current.offsetLeft - posX2.current
      }px`;
    },
    [posX1, posX2]
  );

  const onDragEnd = useCallback((e) => {
    e = e || window.event;
    e.preventDefault();
    console.log(e);

    posFinal.current = refDragHandler.current.offsetLeft;

    if (posFinal.current - posInitial.current < -threshold) {
      fnShiftItem(DIRECTION_LEFT);
    } else if (posFinal.current - posInitial.current > threshold) {
      fnShiftItem(DIRECTION_LEFT);
    } else {
      refDragHandler.current.style.left = `${posInitial.current}px`;
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }, []);

  const onDragStart = useCallback(
    (e) => {
      e = e || window.event;
      e.preventDefault();

      posInitial.current = refDragHandler.current.offsetLeft;

      if (e.type === "touchstart") {
        posX1.current = e.touches[0].clientX;
      } else {
        posX1.current = e.clientX;
        document.onmouseup = onDragEnd;
        document.onmousemove = onDragMove;
      }
    },
    [onDragEnd, onDragMove]
  );

  useLayoutEffect(() => {
    const refFrowardDragHandler = refDragHandler.current;

    refFrowardDragHandler.onmousedown = onDragStart;
    refFrowardDragHandler.addEventListener("touchstart", onDragStart);
    refFrowardDragHandler.addEventListener("touchmove", onDragEnd);
    refFrowardDragHandler.addEventListener("touchstart", onDragMove);
    return () => {
      refFrowardDragHandler.removeEventListener("touchstart", onDragStart);
      refFrowardDragHandler.removeEventListener("touchmove", onDragEnd);
      refFrowardDragHandler.removeEventListener("touchstart", onDragMove);
    };
  }, [onDragStart, onDragEnd, onDragMove]);

  return (
    <div ref={refDragHandler} className="flex -mx-4 flex-row relative">
      {children}
    </div>
  );
};

export default Carousel;
