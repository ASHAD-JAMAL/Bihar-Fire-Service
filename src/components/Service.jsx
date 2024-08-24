import React from "react";
import servicebg from "../assets/serviceBg.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import Box from "../components/Box.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute text-black`}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 2,
        color: "black", // Ensure arrows are black
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" style={{ fontSize: "24px" }} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute text-black`}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 2,
        color: "black", // Ensure arrows are black
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left " style={{ fontSize: "24px" }} />
    </div>
  );
};

function Service() {
  const items = [
    {
      src: s1,
      title: "Operation Force",
      para:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero velit. Vel nihil assumenda molestias? Officia quae voluptatem illum voluptate!,",
    },
    {
      src: s2,
      title: "Fire Fighting",
      para:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero velit. Vel nihil assumenda molestias? Officia quae voluptatem illum voluptate!,",
    },
    {
      src: s3,
      title: "Fire Suppression",
      para:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero velit. Vel nihil assumenda molestias? Officia quae voluptatem illum voluptate!,",
    },
    {
      src: s4,
      title: "Operation Force",
      para:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vero velit. Vel nihil assumenda molestias? Officia quae voluptatem illum voluptate!,",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundImage: `url(${servicebg})` }}
      className="w-full overflow-hidden py-10 bg-cover bg-center"
    >
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold my-3">Service</h1>
        <p className="text-lg">Services We’re providing to Best people</p>
      </div>
      <Slider {...settings} className="px-4">
        {items.map((item, index) => (
          <Box key={index} src={item.src} title={item.title} para={item.para} />
        ))}
      </Slider>
    </div>
  );
}

export default Service;
