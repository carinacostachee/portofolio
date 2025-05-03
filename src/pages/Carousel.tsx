const Carousel = () => {
  const arrayCats = [
    { src: "/photos/mitsu1.jpg", alt: "Mitsu sleeping" },
    { src: "/photos/jiji1.jpeg", alt: "Jiji cute" },
    { src: "/photos/newmitsu.jpeg", alt: "Mitsu on the washing machine" },
    { src: "/photos/jiji2.jpg", alt: "Jiji sleepy" },
  ];

  return (
    <div className="flex flex-row gap-5 mt-10">
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
