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
    <div className="w-1/4 h-1/4 overflow-hidden">
      {arrayCats.map((photo, i) => (
        <img
          key={i}
          src={photo.src}
          alt={photo.alt}
          className="w-40 h-50 object-cover rounded-xl shadow-md"
        />
      ))}
    </div>
  );
};

export default Carousel;
