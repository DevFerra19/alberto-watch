import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./imageCarousel.css";

const ImageCarousel = () => {
  const images = [
    "/Slide6.jpg",
    "/Slide7.jpg",
    "/Slide8.jpg",
    "/Slide9.jpg",
    "/Slide10.jpg",
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Adjust space between slides
        slidesPerView={3} // Show 3 slides at a time
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // On small screens, show 1 slide
          768: { slidesPerView: 2 }, // On tablets, show 2 slides
          1024: { slidesPerView: 3 }, // On desktops, show 3 slides
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              width="100%"
              height="500px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2>Category</h2>
    </div>
  );
};

export default ImageCarousel;
