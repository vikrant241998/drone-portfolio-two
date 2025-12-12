"use client"; // Client component bana diya
import React, { useState, useEffect } from "react";
import "./styles/page.css";

const heroImages: string[] = [
  "https://images.unsplash.com/photo-1482169704817-5b66aafa1a01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Current Image
  "https://images.unsplash.com/photo-1515797855409-08b2b02ccf4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488248740823-7fa0b1765ebd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // 4. Current image URL
  const currentImageUrl = heroImages[currentImageIndex];

  return (
    <>
      <section
      id="/"
        className="hero"
        style={{ backgroundImage: `url(${currentImageUrl})` }}
      >
        <div className="container">
          <div className="hero-content-overlay">
            <div className="hero-content">
              <h1>
                Where <br /> <span className="highlight">Creativity </span>{" "}
                Takes Flight.
              </h1>
              <div className="check-it animate-button">
                <div className="button-icon-wrapper"> &#x27A4; </div>
                Get in touch
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
