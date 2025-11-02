const BackgroundStyle = () => {
  return (
    <div
      className="fixed inset-0 z-10 opacity-15 w-full h-full pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, #ff69b4, #ff69b4 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, #ff69b4, #ff69b4 1px, transparent 1px, transparent 26px)",
        backgroundSize: "26px 26px",
      }}
    ></div>
  );
};

export default BackgroundStyle;
