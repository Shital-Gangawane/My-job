import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredJobs } from "./featuredJobs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:bg-zinc-950 hover:text-white text-zinc-600 border rounded-full p-4"
      onClick={onClick}
    >
      <MdArrowBackIos />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:bg-zinc-950 hover:text-white text-zinc-600 border rounded-full p-4"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </button>
  );
};

const FeaturedJobsCarousel = () => {
  const [numVisible, setNumVisible] = useState(3); // Number of visible images

  useEffect(() => {
    const updateNumVisible = () => {
      if (window.innerWidth < 470) {
        setNumVisible(1);
      } else if (window.innerWidth < 768) {
        setNumVisible(2);
      } else if (window.innerWidth < 1024) {
        setNumVisible(2);
      } else if (window.innerWidth < 1280) {
        setNumVisible(3);
      } else {
        setNumVisible(3);
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
    autoplay: true,
    slidesToShow: numVisible,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="w-full h-auto mx-auto px-2 md:px-20 bg-white flex flex-col items-center">
      <div className="text-start w-full mt-16">
        <h1 className="font-medium text-2xl lg:text-3xl">Featured Jobs</h1>
        <h2>Know your worth and find the job that qualifies your life</h2>
      </div>
      <div className="relative w-full h-full">
        <Slider
          {...settings}
          className=" w-full h-auto py-20 px-2 md:px-16 bg-white"
        >
          {featuredJobs.map((job, index) => (
            <div key={index} className="featured-job-slide">
              <div className="p-6 bg-white shadow-sm rounded-lg h-80vh border hover:border-orange-300">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-700">{job.content}</p>
                <div className="flex flex-col justify-between mt-4">
                  <p className="text-gray-600">{job.location}</p>
                  <p className="text-gray-600">Deadline: {job.deadline}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedJobsCarousel;
