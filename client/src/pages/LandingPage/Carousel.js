import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trustedCompanies } from "./trustedCompanies";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Carousel = () => {
  const [numVisible, setNumVisible] = useState(5); // Number of visible images
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateNumVisible = () => {
      if (window.innerWidth < 768) {
        setNumVisible(2);
      } else if (window.innerWidth < 1024) {
        setNumVisible(3);
      } else if (window.innerWidth < 1280) {
        setNumVisible(4);
      } else {
        setNumVisible(5);
      }
    };

    updateNumVisible();

    const resizeListener = () => {
      updateNumVisible();
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: numVisible,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-full h-96 bg-white flex flex-col items-center justify-center gap-16 px-10 xl:px-28">
      <h2 className="lg:mt-28">Trusted by companies of all sizes</h2>
      <div className="relative w-full">
        <Slider className="w-full mx-auto px-16" ref={sliderRef} {...settings}>
          {trustedCompanies.map((company, index) => (
            <div key={index}>
              <Link to={company.url} className="block">
                <img
                  className="bg-opacity-20 h-16 sm:h-auto grayscale transition duration-300 ease-in-out transform hover:grayscale-0"
                  src={company.logo}
                  alt={`Logo of ${company.name}`}
                />
              </Link>
            </div>
          ))}
        </Slider>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-opacity-100 hover:text-white text-[#6ad61d] bg-[#6ad61d] bg-opacity-20 rounded-lg p-4"
          onClick={prevSlide}
        >
          <MdArrowBackIos />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-opacity-100 hover:text-white text-[#6ad61d] bg-[#6ad61d] bg-opacity-25 rounded-lg p-4"
          onClick={nextSlide}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
