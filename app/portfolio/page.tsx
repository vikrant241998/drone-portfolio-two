"use client";
import React, { useState, useCallback } from "react";
import "../styles/portfolio.css";

const projectData = [
  {
    id: 1,
    title: "Creative Design",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1467864453741-7faf938e3bf0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Web Development",
    category: "Coding",
    imageUrl:
      "https://images.unsplash.com/photo-1523133045649-1a132addedd4?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Product Shoot",
    category: "Photography",
    imageUrl:
      "https://images.unsplash.com/photo-1599403868569-30dae419c0a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Motion Graphics",
    category: "Video",
    imageUrl:
      "https://images.unsplash.com/photo-1555867358-2745816780e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Mobile App UI",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1523346728284-a3084608dead?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "E-commerce Site",
    category: "Development",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664801768789-41b5fd8c69e9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Art Direction",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1477899447710-90571e12f4ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Video Editing",
    category: "Video",
    imageUrl:
      "https://images.unsplash.com/photo-1520841852757-e40af9b5bd12?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Vector Illustration",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1504890195358-94a018166410?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ITEMS_PER_ROW = 3;
const INITIAL_ROWS = 2;
const INITIAL_ITEMS_COUNT = INITIAL_ROWS * ITEMS_PER_ROW; 

const PortfolioSection = () => {
  const [visibleItemsCount, setVisibleItemsCount] =
    useState(INITIAL_ITEMS_COUNT);

  const handleLoadMore = useCallback(() => {
    setVisibleItemsCount((prevCount) => prevCount + ITEMS_PER_ROW);
  }, []);

  const handleShowLess = useCallback(() => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
    setVisibleItemsCount(INITIAL_ITEMS_COUNT);
  }, []);

  // Conditions:
  const showLoadMoreButton = projectData.length > visibleItemsCount;
  const showShowLessButton = visibleItemsCount > INITIAL_ITEMS_COUNT;
  const isLoadMoreNeeded = projectData.length > INITIAL_ITEMS_COUNT;

  const itemsToShow = projectData.slice(0, visibleItemsCount);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-wrapper">
          <h2 data-aos="fade-up-right">Portfolio</h2>
        </div>

        {/* --- Image Grid Handler --- */}
        <div className="portfolio-handler" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
          {itemsToShow.map((project) => (
            <div key={project.id} className="portfolio-img-card">
              <img src={project.imageUrl} alt={project.title} />

              {/* --- Hover Overlay --- */}
              <div className="item-overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Button Container --- */}
        <div className="load-more-container">
          
          {isLoadMoreNeeded && showLoadMoreButton && (
            <button
              onClick={handleLoadMore}
              className="portfolio-btn load-more-btn"
            >
              Load More
            </button>
          )}


          {showShowLessButton && (
            <button data-aos="fade-up-right"
              onClick={handleShowLess}
              className="portfolio-btn show-less-btn"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
