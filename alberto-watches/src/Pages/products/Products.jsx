import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./products.css";
import AlbertoCoFooter from "../../Components/Footer/Footer";

const Products = () => {
  const location = useLocation();
  const watchType = location.state?.watchType || "all";
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        if (watchType && jsonData.products?.[watchType]) {
          setProducts(jsonData.products[watchType]);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [watchType]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.img[0]);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedImage(null);
  };

  return (
    <div className="product-container">
      <h2>{watchType} Watches</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.img[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="product" />{" "}
            <h2>{selectedProduct.name}</h2>
            <p>Brand: {selectedProduct.brand}</p>
            <p>{selectedProduct.description}</p>
            <p>Rating: {selectedProduct.rating} ⭐</p>
            <p>Price: ${selectedProduct.price}</p>
            <div className="image-gallery">
              {selectedProduct.img.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  className={image === selectedImage ? "active" : ""}
                  style={{
                    cursor: "pointer",
                    border: image === selectedImage ? "2px solid blue" : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div>
        <AlbertoCoFooter />
      </div>
    </div>
  );
};

export default Products;
