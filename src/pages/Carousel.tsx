import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextPhoto = () => {
    let newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const previousPhoto = () => {
    let lastIndex = currentIndex - 1;
    setCurrentIndex(lastIndex);
  };

  const arrayCats = [
    { src: "/photos/mitsu1.jpg", alt: "Mitsu sleeping" },
    { src: "/photos/jiji1.jpeg", alt: "Jiji cute" },
    { src: "/photos/newmitsu.jpeg", alt: "Mitsu on the washing machine" },
    { src: "/photos/jiji2.jpg", alt: "Jiji sleepy" },
  ];

  return (
    <div className=" relative w-96 h-64 mx-auto mt-10 overflow-hidden">
      {arrayCats.map((photo, i) => {
        let transform = "";
        let zIndex = 0;

        let offset = i - currentIndex;
        if (offset === 0) {
          transform = "translateX(0) scale(1.1) rotateY(0deg)";
          zIndex = 10;
        }
        if (offset === 1) {
          transform = "translateX(60%) scale(0.9) rotateY(-25deg)";
          zIndex = 5;
        }
        if (offset === 2) {
          transform = "translateX(80%) scale(0.9) rotateY(25deg)";
          zIndex = 3;
        }

        return (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className="absolute top-1/2 left-1/2 w-40 h-50 object-cover rounded-xl shadow-md transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
            style={{ transform, zIndex }}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
