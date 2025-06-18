
import React from "react";

const placeholders = [
  "data/WrkExp1.png",
  // "data/WrkExp2.png",
  "data/WrkExp3.png",
  "data/WrkExp4.png",
];

const ImageCarousel = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className="
          flex gap-4 overflow-x-auto
          no-scrollbar
          scroll-snap-x
          px-2
          "
        style={{ scrollSnapType: "x mandatory", scrollbarColor:"revert" }}
      >
        {placeholders.map((img, i) => (
          <div
            key={i}
            className="
              flex-shrink-0
              w-[80vw] xs:w-[70vw] sm:w-[45vw] md:w-[310px] lg:w-[370px]
              h-[150px] xs:h-[170px] sm:h-[220px] md:h-[220px]
              rounded-2xl border border-gray-200 shadow-md 
              bg-white
              cursor-grab
              scroll-snap-align
            "
            style={{ scrollSnapAlign: "center" }}
          >
            <img
              src={img}
              alt={`carousel-${i + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* Pagination Dots */}
      <div className="mt-3 flex gap-1 justify-center">
        {placeholders.map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-gray-300"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
