
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
      title: "Explore the Beauty",
      description: "Discover breathtaking landscapes and beautiful destinations."
    },
    {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
      title: "Adventure Awaits",
      description: "Experience nature and create unforgettable memories."
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <h1>Discover The World</h1>
      <p className="subtitle">Explore beautiful places with us</p>

      <div className="carousel">
        {images.map((image, i) => (
          <div
            key={i}
            className={`slide ${index === i ? "active" : ""}`}
          >
            <img src={image.url} alt={image.title} />

            <div className="overlay">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
              <button className="explore">Explore Now →</button>
            </div>
          </div>
        ))}

        <button className="arrow left" onClick={prevSlide}>❮</button>
        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active-dot" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <p className="counter">
        0{index + 1} / 02
      </p>
    </div>
  );
}

export default App;
