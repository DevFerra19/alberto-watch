import React from "react";
import homeimg from "/homeimg.jpg";
import "./home.css";
import AlbertoCoFooter from "../Footer/Footer";
import ImageCarousel from "../Carousel/imageCarousel";
import ImageGrid from "../Grid/Grid";

const Home = () => {
  return (
    <div className="page-home-container">
      <div className="home-content">
        <div className="image-container">
          <img
            src={homeimg}
            alt="Alberto Watch Company"
            className="home-image"
          />

          <div className="image-text">
            <h1>Welcome to Alberto Watch Company</h1>
            <p>
              Where timelessness meets luxury, and unparalled selection meets
              first-class service...
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <h2 style={{ textAlign: "center" }}>Technology watches</h2>
        <ImageCarousel />
        <ImageGrid />
      </div>

      <AlbertoCoFooter />
    </div>
  );
};

export default Home;
