"use client";
import SubHeader from "../ui/subHeader";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselImages = [
  { src: "/const1.jpg", alt: "First slide" },
  { src: "/const4.jpg", alt: "Second slide" },
  { src: "/const3.jpg", alt: "Third slide" },
];

export default function Header() {
  return (
    <div className="">
      <div className="w-full h-full overflow-hidden">
        <div className="relative z-10 h-full flex flex-col">
          <SubHeader />
          <div className="w-full h-[75vh] mt-[15vh] 4xl:mt-[10vh] text-white mb-10">
            <Carousel style={{height:"75vh"}} className="w-full relative carousel-container">
              {carouselImages.map((image, index) => (
                <Carousel.Item key={index} className="carousel-item-container h-full">
                  <div className="carousel-image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      draggable="false"
                      className="carousel-image"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}