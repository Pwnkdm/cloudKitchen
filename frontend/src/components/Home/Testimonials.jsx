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
        "http://res.cloudinary.com/drfbvnwqd/image/upload/v1724261141/jxx7pklbs2gte0lzqp4p.jpg",
    },
    {
      name: "Anirudh Solanke",
      review:
        "From the first bite to the last, my lunch was a symphony of taste and texture; I left feeling completely satisfied.",
      location: "Kothrud, Pune",
      image: "http://res.cloudinary.com/drfbvnwqd/image/upload/v1724271403/yxteqen34w8buaxbyuhq.jpg",
    },
    {
      name: "Rushi Gaikwad",
      review:
        "Effortlessly combining freshness and creativity, the lunch offerings here are simply outstanding.",
      location: "Sangvi, PCMC",
      image:
        "https://res.cloudinary.com/drfbvnwqd/image/upload/v1724341267/otifrxgof1gxin2c89ft.jpg",
    },
    {
      name: "Akash Deshmukh",
      review:
        "The variety of dishes is impressive, and each one is more delicious than the last!",
      location: "Alandi, PCMC",
      image:
        "https://res.cloudinary.com/drfbvnwqd/image/upload/v1724341245/bkmxrdv9v4oqnnvk8qlu.jpg",
    },
    {
      name: "Pratik Humbe",
      review:
        "A perfect balance of flavors and healthy options, loved every bite.",
      location: "Ghorpadi, Pune",
      image:
        "https://res.cloudinary.com/drfbvnwqd/image/upload/v1724341256/ga4mi5rjoyiqsr67bpsk.jpg",
    },
    {
      name: "Rahul Raut",
      review:
        "The presentation was top-notch, and the taste exceeded all expectations...",
      location: "Deccan, Pune",
      image:
        "http://res.cloudinary.com/drfbvnwqd/image/upload/v1724415001/lrrogocw9sprhimkvnp9.jpg",
    },
  ];

  // Every dish was a burst of flavor; truly a delightful culinary experience.
  // Fresh ingredients and expertly prepared meals, absolutely satisfying!
  // From appetizers to dessert, everything was crafted to perfection.
  // Innovative dishes with a perfect balance of taste and texture—simply amazing!

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
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white"
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
