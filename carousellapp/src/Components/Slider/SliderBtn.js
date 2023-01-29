import React from "react";

export default function SliderBtn({ changeSlide, direction }) {
  return (
    <div>
      <div
        onClick={changeSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src="/carousel/arrow.png" alt="slider arrow" />
      </div>
    </div>
  );
}
