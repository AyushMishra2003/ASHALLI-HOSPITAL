import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SlidingBanner from "../pages/Home/SliderBanner";

// Slider data
const slides = [
  {
    id: 1,
    image: `https://picsum.photos/1920/1080?random=1`,
    title: "Higher Standards for all Healthcare",
  },
  {
    id: 2,
    image: `https://picsum.photos/1920/1080?random=2`,
    title: "Best Healthcare services",
  },
  {
    id: 3,
    image: `https://picsum.photos/1920/1080?random=3`,
    title: "Trustworthy hospital",
  },
];

export default function HeroSlider() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <Slider {...settings} className="h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full h-[68vh] overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.title}
                title={slide.title}
                loading="eager"
                fetchpriority="high"
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </Slider>
        <SlidingBanner />
      </div>
    </>
  );
}

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      aria-label="Next"
      title="Next"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover:bg-primary-dark cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      aria-label="previous"
      title="previous"
      className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover:bg-primary-dark cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};