import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  let sliding = [
    {
      id: 1,
      img_url: "/assets/banner.jpg",
      heading: "First slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      img_url: "/assets/banner2.webp",
      heading: "Second slide label",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      img_url: "/assets/banner3.jpg",
      heading: "Third slide label",
      desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];
  return (
    <Carousel data-bs-theme="dark" fade>
      {sliding.map((slideData) => (
        <Carousel.Item key={slideData.id}>
          <img
            className="d-block w-100"
            src={slideData.img_url}
            alt={slideData.heading}
            height={350}
          />
          <Carousel.Caption>
            <h5>{slideData.heading}</h5>
            <p>{slideData.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
