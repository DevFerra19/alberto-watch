import React from "react";
import { useNavigate } from "react-router-dom";
import "./Grid.css";

const ImageGrid = () => {
  const navigate = useNavigate();

  const handleButtonClick = (watchType) => {
    navigate(`/category/product`, { state: { watchType } });
  };

  const gridItems = [
    {
      imageUrl: "/red.jpg",
      watchType: "luxurious",
      altText: "Luxury Watches",
      buttonText: "View Luxurious",
    },
    {
      imageUrl: "/Smartwatch.jpg",
      watchType: "smart",
      altText: "Smart Watches",
      buttonText: "View Smart",
    },
    {
      imageUrl: "/white.jpg",
      watchType: "vintage",
      altText: "Vintage Watches",
      buttonText: "View Vintage",
    },
  ];

  return (
    <div id="grid" className="image-grid">
      {gridItems.map((item, index) => (
        <div
          className="grid-item"
          onClick={() => handleButtonClick(item.watchType)}
          key={index}
        >
          <img src={item.imageUrl} alt={item.altText} />
          <h2>{item.watchType}</h2>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
