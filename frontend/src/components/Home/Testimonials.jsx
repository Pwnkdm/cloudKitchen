import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import useIntersection from "../Hooks/useSections";

const Testimonials = () => {
  const ref = useRef(null);
  const [element, setElement] = useState(null);
  const inView = useIntersection({ element, rootMargin: "0px" });

  useEffect(() => {
    setElement(ref.current);
  }, []);

  const testimonials = [
    {
      name: "Aniket Humbe",
      review:
        "Incredible flavors and generous portions; lunch here is not just a meal, it's an experience.",
      location: "Hadapsar, Pune",
      image:
        "https://github.com/user-attachments/assets/1e9867df-724c-4512-ac4a-438eda288f33",
    },
    {
      name: "Neha",
      review:
        "From the first bite to the last, my lunch was a symphony of taste and texture; I left feeling completely satisfied.",
      location: "PCMC",
      image: "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg",
    },
    {
      name: "Vikram",
      review:
        "Effortlessly combining freshness and creativity, the lunch offerings here are simply outstanding.",
      location: "Pune",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vVBAvcz_VzzBC-8kmKTJ6j3B7t3LbYOhhg&s",
    },
    {
      name: "Anjali",
      review:
        "The variety of dishes is impressive, and each one is more delicious than the last!",
      location: "Mumbai",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6NBmp0C2vF7IvnOQO22FO2mMxwmDAl3tow&s",
    },
    {
      name: "Ravi",
      review:
        "A perfect balance of flavors and healthy options, loved every bite.",
      location: "Pune",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEJbcU9EwHpp_oZpwQZfFl43u-SwD74TjzA&s",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref} className="w-full py-4 box-border h-[300px]">
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2 box-border">
            <div className="bg-gray-200 rounded-lg shadow-md flex flex-col items-center p-4 box-border h-full max-w-sm mx-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
              <p className="text-sm text-gray-800 text-center mb-2">
                {testimonial.review}
              </p>
              <span className="text-xs text-gray-600">
                {testimonial.location}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
