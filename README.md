
# Ex05 Image Carousel
## Date:24.11.2026
## Name:Piyush Kumar
## Reg No:212223220075

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
## App.jsx
```

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
```
# App.css
```

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #141e30, #243b55);
  min-height: 100vh;
}

.app {
  text-align: center;
  padding: 45px 20px;
  color: white;
}

h1 {
  font-size: 38px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.subtitle {
  color: #cbd5e1;
  margin-bottom: 35px;
}

.carousel {
  position: relative;
  max-width: 950px;
  height: 480px;
  margin: auto;
  overflow: hidden;
  border-radius: 22px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4);
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    transparent,
    rgba(0,0,0,0.75)
  );
  padding: 25px;
  color: white;
}

.overlay h2 {
  font-size: 42px;
  margin-bottom: 15px;
}

.overlay p {
  font-size: 17px;
  margin-bottom: 25px;
}

.explore {
  padding: 13px 28px;
  border: none;
  border-radius: 30px;
  background: #ffffff;
  color: #243b55;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.explore:hover {
  background: #38bdf8;
  color: white;
  transform: scale(1.05);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.85);
  color: #111;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
}

.arrow:hover {
  background: #38bdf8;
  color: white;
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}

.dots {
  margin-top: 25px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 7px;
  border-radius: 50%;
  background: #64748b;
  cursor: pointer;
  transition: 0.3s;
}

.active-dot {
  width: 30px;
  border-radius: 10px;
  background: #38bdf8;
}

.counter {
  margin-top: 15px;
  color: #cbd5e1;
  letter-spacing: 3px;
}

@media (max-width: 600px) {
  .carousel {
    height: 350px;
  }

  .overlay h2 {
    font-size: 28px;
  }

  .overlay p {
    font-size: 14px;
  }

  h1 {
    font-size: 28px;
  }
}
```


## OUTPUT
<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/21f09593-6ffe-4b6e-99d1-530b3e55d08a" />
<img width="1782" height="807" alt="image" src="https://github.com/user-attachments/assets/7a322f65-fe48-4bcd-9a96-25833234f3cd" />




## RESULT
The program for creating Image Carousel using React is executed successfully.
