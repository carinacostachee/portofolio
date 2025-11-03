import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayCats = [
    { src: "/photos/mitsu1.jpg", alt: "Mitsu sleeping" },
    { src: "/photos/jiji1.jpeg", alt: "Jiji cute" },
    { src: "/photos/newmitsu.jpeg", alt: "Mitsu on the washing machine" },
    { src: "/photos/jiji2.jpg", alt: "Jiji sleepy" },
  ];

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayCats.length);
  };

  const previousPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + arrayCats.length) % arrayCats.length
    );
  };

  return (
    <>
      <div className=" relative  w-100 h-70 mx-auto mt-10 overflow-hidden perspective-[800px]">
        {arrayCats.map((photo, i) => {
          let transform = "";
          let zIndex = 0;

          let offset = i - currentIndex;
          if (offset === 0) {
            transform = "translateX(0px) scale(1.1) rotateY(0deg)";
            zIndex = 100;
          }
          if (offset === 1 || offset === -3) {
            transform = "translateX(-110px) scale(0.9) rotateY(-25deg)";
            zIndex = 50;
          }
          if (offset === 2 || offset === -2) {
            transform = "translateX(110px) scale(0.9) rotateY(25deg)";
            zIndex = 40;
          }

          return (
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="absolute top-1/2 left-1/2 w-50 h-60 object-cover rounded-xl shadow-md transition-all duration-600 -translate-x-1/2 -translate-y-1/2"
              style={{ transform, zIndex }}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-4 gap-8">
        <button onClick={previousPhoto}>
          <ChevronLeft size={49} stroke="rgb(173, 20, 87)" strokeWidth={3} />
        </button>
        <button onClick={nextPhoto}>
          <ChevronRight size={50} stroke="rgb(173, 20, 87)" strokeWidth={2.9} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
