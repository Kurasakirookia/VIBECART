import React, { useState } from "react";
import "../css/carousel.css"; // Include your CSS here

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundColor: "white",
      products: [
        { image: "./images/p1_product1.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product1.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
      ],
    },
    {
      id: 2,
      backgroundColor: "white",
      products: [
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product1.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product1.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
      ],
    },
    {
      id: 3,
      backgroundColor: "white",
      products: [
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product1.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product2.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
        { image: "./images/p1_product1.png", text: "Loose fit hoodie", price: "Rs.1,499.00" },
      ],
    },
  ];

  const goToSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(slides.length - 1);
    } else if (index >= slides.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="carousel_container">
      <div className="carousel">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="slide"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <div className="product_cards">
                {slide.products.map((product, idx) => (
                  <div className="product_card" key={idx}>
                    <img src={product.image} alt={`Product ${idx + 1}`} />
                    <p
                      className="text product1_text"
                      style={{ fontSize: "12px", color: "black" }}
                    >
                      {product.text} <br /> {product.price}
                    </p>
                    <div className="product-colors">
                      <div className="color-dot black"></div>
                      <div className="color-dot gray"></div>
                      <div className="color-dot white"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="prev" onClick={() => goToSlide(currentIndex - 1)}>
          ❮
        </button>
        <button className="next" onClick={() => goToSlide(currentIndex + 1)}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
