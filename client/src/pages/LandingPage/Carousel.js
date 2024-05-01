import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trustedCompanies } from "./trustedCompanies";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(5); // Number of visible images

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
      setStartIndex(0); // Reset startIndex on window resize
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const nextSlide = () => {
    if (startIndex + numVisible < trustedCompanies.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="w-full h-96 bg-white">
      <div className="flex flex-col items-center justify-center gap-16 px-10 xl:px-28">
        <h2 className="mt-28">Trusted by companies of all sizes</h2>
        <div className="relative flex justify-center items-center overflow-hidden w-full ">
          <div
            className="flex w-full justify-evenly transition-transform duration-300 ease-in-out"
            style={{
              transform: `translate3d(-${
                startIndex * (1 / numVisible)
              }%, 0, 0)`,
            }}
          >
            {trustedCompanies
              .slice(startIndex, startIndex + numVisible)
              .map((company, index) => (
                <Link to={company.url} key={index} className="block">
                  <img
                    className="bg-opacity-20 grayscale transition duration-300 ease-in-out transform hover:grayscale-0"
                    src={company.logo}
                    alt={`Logo of ${company.name}`}
                  />
                </Link>
              ))}
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-opacity-100 hover:text-white text-[#6ad61d] bg-[#6ad61d] bg-opacity-25 rounded-lg p-4"
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
    </section>
  );
};

export default Carousel;
