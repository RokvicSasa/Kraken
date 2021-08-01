import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
// Components
import GenreBox from "../Elements/GenreBox";

const SliderWrapper = () => {
  const genres = useSelector((state) => state.genres.genres);

  let settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
    ],
  };
  return <Slider {...settings}>{genres ? genres.map((genre) => <GenreBox genre={genre} key={genre.id} />) : null}</Slider>;
};

export default SliderWrapper;
